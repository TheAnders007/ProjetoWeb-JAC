require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
const bcrypt = require("bcrypt");
var path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const session = require("express-session");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var eventoRouter = require("./routes/evento");
var pecasanterioresRouter = require("./routes/pecasanteriores");
var pecas2023Router = require("./routes/pecas2023/pecas2023"); 
var assistematicoRouter = require("./routes/assistematico");
var contagioRouter = require("./routes/contagiomentira");
var loginRouter = require("./routes/login");
var cadastroRouter = require("./routes/cadastro");

var app = express();

const saltRounds = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    }),
);

//Configuração do banco de dados para registrar alunos

const dbjac = new sqlite3.Database("./sitejac.db", (err) => {
    if (err) {
        console.error(
            "Erro ao conectar ao banco de dados dos alunos:",
            err.message,
        );
    } else {
        console.log("Conectado ao banco de dados!!");
    }
});

dbjac.serialize(() => {
    dbjac.run(`CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        matricula TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});

// Middleware para verificar o corpo de requisição
app.use((req, res, next) => {
    console.log("Corpo de Requisição:", req.body);
    next();
});

app.post("/register", (req, res) => {
    const { username, matricula, password, confirmPassword } = req.body;

    // Verifique se as senhas coincidem
    if (password !== confirmPassword) {
        return res.status(400).render("As senhas não coincidem!");
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(500).send("Erro ao criar hash da senha!");
        }

        // Crie um novo usuário no banco de dados
        const stmt = dbjac.prepare(
            "INSERT INTO alunos (username, matricula, password) VALUES (?, ?, ?)",
        );
        stmt.run(username, matricula, hash, function (err) {
            if (err) {
                console.error("Erro ao cadastrar usuário:", err.message);
                return res
                    .status(500)
                    .send(`Erro ao cadastrar usuário: ${err.message}`);
            }
            res.send(`
        <html>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');  

                body { font-family: Arial, sans-serif; background: rgb(255,130,130); background: linear-gradient(45deg, rgba(255,130,130,1) 0%, rgba(145,187,251,1) 75%); display: flex; align-items: center; justify-content: center;
                }
                .msg { font-size: 18px;  font-family: "Lexend", sans-serif; color: beige}
            </style>
        </head>
        <body>
            <p class="msg">Cadastro realizado!</p>
        </body>
        </html>
    `);
        });
        stmt.finalize();
    });
});

app.post("/login", (req, res) => {
    const { username, matricula, password } = req.body;

    console.log("Request Body:", req.body);
    console.log("Username:", username);
    console.log("Matrícula:", matricula);
    console.log("Password:", password);

    dbjac.get(
        "SELECT * FROM alunos WHERE username = ? AND matricula = ?",
        [username, matricula],
        (err, row) => {
            if (err) {
                return res.status(500).send("Erro ao verificar usuário!");
            }

            console.log("DB Row:", row);

            if (row) {
                bcrypt.compare(password, row.password, (err, result) => {
                    if (err) {
                        return res.status(500).send("Erro ao comparar senha!");
                    }

                    console.log("Password Match:", result);

                    if (result) {
                        req.session.username = username;
                        req.session.matricula = matricula;
                        res.send(`<html>
                        <head>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');  
                
                                body { font-family: Arial, sans-serif; background: rgb(255,130,130); background: linear-gradient(45deg, rgba(255,130,130,1) 0%, rgba(145,187,251,1) 75%); display: flex; align-items: center; justify-content: center;
                                }
                                .msg { font-size: 18px;  font-family: "Lexend", sans-serif; color: beige}
                            </style>
                        </head>
                        <body>
                            <p class="msg">Login bem-sucedido!</p>
                        </body>
                        </html>`);
                    } else {
                        res.status(401).send(
                            "Usuário, Matrícula ou senha inválidos!",
                        );
                    }
                });
            } else {
                res.status(401).send("Usuário, Matrícula ou senha inválidos!");
            }
        },
    );
});

function isAuthenticated(req, res, next) {
    if (req.session && req.session.username) {
        return next();
    } else {
        res.status(401).send(
            "Você precisa estar logado para acessar esta página.",
        );
    }
}

app.get("/user", (req, res) => {
    if (req.session.username) {
        res.json({ username: req.session.username });
    } else {
        res.status(401).send("Não autenticado");
    }
});

// Criação da tabela das peças, se não existir
dbjac.serialize(() => {
    dbjac.run(
        "CREATE TABLE IF NOT EXISTS jacpecas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, ano INTEGER, caminho TEXT)",
    );
});

app.get("/search", (req, res) => {
    const searchTerm = req.query.term;

    if (!searchTerm) {
        return res.status(400).send("Termo de pesquisa não fornecido.");
    }

    // Buscar peças no banco de dados
    dbjac.all(
        "SELECT nome, ano, caminho FROM jacpecas WHERE nome LIKE ?",
        [`%${searchTerm}%`],
        (err, rows) => {
            if (err) {
                return res
                    .status(500)
                    .send("Erro ao consultar o banco de dados.");
            }

            res.setHeader("Content-Type", "application/json");
            res.json(rows);
        },
    );
});

// Criação da tabela de notas, se não existir
dbjac.serialize(() => {
    dbjac.run(
        "CREATE TABLE IF NOT EXISTS jacnotas (id INTEGER PRIMARY KEY AUTOINCREMENT, valor INTEGER, peca TEXT, usuario INTEGER)",
    );
});

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/api/nota/:peca", isAuthenticated, (req, res) => {
    const { nota } = req.body;
    const peca = req.params.peca; 
    const mat = req.session.matricula;

    dbjac.serialize(() => {
        dbjac.get(
            'SELECT id FROM jacnotas WHERE peca = ? AND usuario = ?',
            [peca, mat],
            (err, row) => {
                if (err) {
                    console.error("Erro ao verificar a nota existente:", err);
                    return res.status(500).send("Erro ao verificar a nota existente!");
                }

                if (row) {
                    // Atualizar a nota existente
                    dbjac.run(
                        "UPDATE jacnotas SET valor = ? WHERE id = ?",
                        [nota, row.id],
                        (err) => {
                            if (err) {
                                console.error("Erro ao atualizar a nota:", err);
                                return res.status(500).send(`Erro ao atualizar a nota: ${err.message}`);
                            }
                            res.status(200).send(`Nota ${nota} para a peça "${peca}" salva com sucesso!`);
                        },
                    );
                } else {
                    // Inserir uma nova nota
                    dbjac.run(
                        'INSERT INTO jacnotas (valor, peca, usuario) VALUES (?, ?, ?)',
                        [nota, peca, mat],
                        (err) => {
                            if (err) {
                                console.error("Erro ao salvar a nota:", err);
                                return res.status(500).send(`Erro ao salvar a nota: ${err.message}`);
                            }
                            res.status(200).send(`Nota ${nota} para a peça "${peca}" salva com sucesso!`);
                        },
                    );
                }
            },
        );
    });
});


app.get("/api/media/:peca", (req, res) => {
    const peca = req.params.peca;

    dbjac.get(
        'SELECT AVG(valor) AS media FROM jacnotas WHERE peca = ?',
        [peca],
        (err, row) => {
            if (err) {
                console.error("Erro ao calcular a média:", err);
                return res.status(500).send("Erro ao calcular a média");
            }
            res.json({ media: row.media || 0 });
        },
    );
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/evento", eventoRouter);

app.use("/pecasanteriores", pecasanterioresRouter);
app.use("/pecasanteriores", pecas2023Router);
app.use("/pecasanteriores/assistematico", assistematicoRouter);
app.use("/login", loginRouter);
app.use("/cadastro", cadastroRouter);
app.use("/pecasanteriores/ocontagiodamentira", contagioRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;