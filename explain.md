<h1> Explicação (app.js) </h1>

<h2> 1. Importação de Módulos </h2>

```javascript
require('dotenv').config(); //carrega variáveis de ambiente de um arquivo .env
var createError = require('http-errors'); //cria erros HTTP personalizados
var express = require('express'); //framework principal para criar o servidor web
const bcrypt = require('bcrypt'); //criptografa e compara senhas
var path = require('path'); //resolve caminhos de arquivos e diretórios
const sqlite3 = require('sqlite3').verbose(); //interação com banco de dados
const bodyParser = require('body-parser'); //analisa o corpo das requisições HTTP
var cookieParser = require('cookie-parser'); //analisa cookies
const session = require('express-session'); //gerencia sessões do usuário, o que armazena informações entre páginas distintas
var logger = require('morgan'); //middleware de logging HTTP
```

<h2> 2. Roteadores </h2>

```javascript
var indexRouter = require('./routes/index');
var avioesdepapelRouter = require("./routes/avioesdepapel");
var amortesalvaRouter = require("./routes/amortesalva");
var sinaRouter = require("./routes/sina");
var pecasanterioresRouter = require("./routes/pecasanteriores");
var raizIgnoRouter = require("./routes/raizesdaignorancia");
var lindasRouter = require("./routes/lindasdemorrer");
var loginRouter = require("./routes/login");
var cadastroRouter = require("./routes/cadastro");
```

Esses roteadores são importados de arquivos de rotas específicos, e eles definem os endpoints para diferentes partes da aplicação.

<h2> 3. Configuração do Servidor </h2>

```javascript
var app = express();
const saltRounds = 10;
```

- app é a instância do servidor Express.
- saltRounds define o número de rodadas para o hashing de senhas com bcrypt.

<h2> 4. Middlewares </h2>

```javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
```

- express.urlencoded() e express.json() são usados para analisar dados do corpo da requisição.
- express.static() serve arquivos estáticos (por exemplo, CSS, JavaScript, imagens) a partir do diretório public.

```javascript
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}));
```

- express-session gerencia sessões com um segredo definido nas variáveis de ambiente.

<h2> 5. Configuração do banco de dados </h2>

```javascript
//Conexão com o banco de dados
const dbjac = new sqlite3.Database('./sitejac.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados dos alunos:', err.message);
    } else {
        console.log('Conectado ao banco de dados!!');
    }
});
```

```javascript
//Criação da tabela alunos
dbjac.serialize(() => {
    dbjac.run(`CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        matricula TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});
```

<h2> 6. Rota de Cadastro </h2>

```javascript
app.post('/register', (req, res) => {
    const { username, matricula, password, confirmPassword } = req.body;

    // Verifique se as senhas coincidem
    if (password !== confirmPassword) {
        return res.status(400).render('As senhas não coincidem!');
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(500).send('Erro ao criar hash da senha!');
        }

        // Crie um novo usuário no banco de dados
        const stmt = dbjac.prepare('INSERT INTO alunos (username, matricula, password) VALUES (?, ?, ?)');
        stmt.run(username, matricula, hash, function(err) {
            if (err) {
                console.error('Erro ao cadastrar usuário:', err.message); 
                return res.status(500).send(`Erro ao cadastrar usuário: ${err.message}`);
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
```

- Rota para o cadastro de um novo usuário. Verifica se as senhas coincidem, criptografa a senha, e salva os dados no banco de dados.

<h2> 7. Rota de Login </h2>

```javascript
app.post('/login', (req, res) => {
    const { username, matricula, password } = req.body;

    console.log('Request Body:', req.body); 
    console.log('Username:', username);
    console.log('Matrícula:', matricula);
    console.log('Password:', password);

    dbjac.get('SELECT * FROM alunos WHERE username = ? AND matricula = ?', [username, matricula], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao verificar usuário!');
        }

        console.log('DB Row:', row);

        if (row) {
            bcrypt.compare(password, row.password, (err, result) => {
               if (err) {
                    return res.status(500).send('Erro ao comparar senha!');
                }

                console.log('Password Match:', result);

                if (result) {
                    req.session.username = username;
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
                    res.status(401).send('Usuário, Matrícula ou senha inválidos!');
                }
            });
        } else {
            res.status(401).send('Usuário, Matrícula ou senha inválidos!');
        }
    });
});
```

- Rota para login de um usuário. Verifica o nome de usuário, matrícula e a senha e usa bcrypt para comparar a senha fornecida com a armazenada.

<h2> 8. Função Middleware de Autenticação </h2>

```javascript
function isAuthenticated(req, res, next) {
    if (req.session && req.session.username) {
        return next(); 
    } else {
        res.status(401).send('Você precisa estar logado para acessar esta página.');
    }
}
```

- Verifica se o usuário está autenticado antes de permitir o acesso a funcionalidades.

<h2> 9. Rotas para Notas </h2>

```javascript
app.post('/api/nota/avioesdepapel', isAuthenticated, (req, res) => {
    const { nota } = req.body;
    const stmt = dbjac.prepare('INSERT INTO jacnotas (valor, peca) VALUES (?, "avioesdepapel")');
    
    stmt.run(nota, function(err) {
        if (err) {
            res.status(500).send('Erro ao salvar a nota!');
            return;
        }
        res.status(200).send('Nota salva com sucesso!');
    });

    stmt.finalize();
});

app.get('/api/media/avioesdepapel', (req, res) => {
  dbjac.get('SELECT AVG(valor) AS media FROM jacnotas WHERE peca = "avioesdepapel"', (err, row) => {
      if (err) {
          res.status(500).send('Erro ao calcular a média');
          return;
      }
      res.json({ media: row.media || 0 });
  });
});
```

- Rotas para salvar notas e calcular médias para diferentes categorias (por exemplo, "avioesdepapel", "amortesalva", etc.). A autenticação é necessária para salvar notas, mas não para calcular médias.

<h2> 10. Configuração da View Engine e Roteadores </h2>

```javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use("/pecasanteriores/avioesdepapel", avioesdepapelRouter);
app.use("/pecasanteriores/amortesalva", amortesalvaRouter);
app.use("/pecasanteriores", pecasanterioresRouter);
app.use("/pecasanteriores/sina", sinaRouter);
app.use("/pecasanteriores/raizesdaignorancia", raizIgnoRouter);
app.use("/pecasanteriores/lindasdemorrer", lindasRouter);
app.use("/login", loginRouter);
app.use("/cadastro", cadastroRouter);
```

- Configura o motor de visualização ejs e define os roteadores para diferentes rotas da aplicação.

<h2> 11. Tratamento de Erros </h2>

```javascript
  app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env')
```







