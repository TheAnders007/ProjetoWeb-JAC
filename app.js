require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
const bcrypt = require('bcrypt');
var path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var avioesdepapelRouter = require("./routes/avioesdepapel");
var amortesalvaRouter = require("./routes/amortesalva");
var sinaRouter = require("./routes/sina");
var pecasanterioresRouter = require("./routes/pecasanteriores");
var raizIgnoRouter = require("./routes/raizesdaignorancia");
var lindasRouter = require("./routes/lindasdemorrer");
var loginRouter = require("./routes/login");
var cadastroRouter = require("./routes/cadastro");

var app = express();

const saltRounds = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}));

//Configuração do banco de dados para registrar alunos

const dbalunos = new sqlite3.Database('./cadastro.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados dos alunos:', err.message);
    } else {
        console.log('Conectado ao banco de dados dos usuários!!');
    }
});

dbalunos.serialize(() => {
    dbalunos.run(`CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        matricula TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});

// Middleware de depuração para verificar o corpo da requisição
app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

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
    const stmt = dbalunos.prepare('INSERT INTO alunos (username, matricula, password) VALUES (?, ?, ?)');
    stmt.run(username, matricula, hash, function(err) {
        if (err) {
            return res.status(500).send('Erro ao cadastrar usuário!');
        }
        console.log('Cadastro realizado com sucesso!');
    });
    stmt.finalize();
});
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Request Body:', req.body); 
    console.log('Username:', username);
    console.log('Password:', password);

    dbalunos.get('SELECT * FROM alunos WHERE username = ?', [username], (err, row) => {
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
                    res.send('Login bem-sucedido!');
                } else {
                    res.status(401).send('Usuário ou senha inválidos!');
                }
            });
        } else {
            res.status(401).send('Usuário ou senha inválidos!');
        }
    });
});

app.get('/user', (req, res) => {
    if (req.session.username) {
        res.json({ username: req.session.username });
    } else {
        res.status(401).send('Não autenticado');
    }
});


// Configuração do banco de dados para inserção das notas

const db = new sqlite3.Database('./jacnotas.db', (err) => {
  if (err) {
      console.error('Erro ao abrir o banco de dados das avaliações das peças:', err.message);
  } else {
      console.log('Conectado ao banco de dados das avaliações!!');
  }
});

// Criação da tabela de notas, se não existir
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS jacnotas (id INTEGER PRIMARY KEY AUTOINCREMENT, valor INTEGER, peca TEXT)');
});

app.use(bodyParser.json());
app.use(express.static('public'));


app.post('/api/nota/avioesdepapel', (req, res) => {
    const { nota } = req.body;
    const stmt = db.prepare('INSERT INTO jacnotas (valor, peca) VALUES (?, "avioesdepapel")');
    
    stmt.run(nota, function(err) {
        if (err) {
            res.status(500).send('Erro ao salvar a nota');
            return;
        }
        res.status(200).send('Nota salva com sucesso!');
    });

    stmt.finalize();
});


app.get('/api/media/avioesdepapel', (req, res) => {
  db.get('SELECT AVG(valor) AS media FROM jacnotas WHERE peca = "avioesdepapel"', (err, row) => {
      if (err) {
          res.status(500).send('Erro ao calcular a média');
          return;
      }
      res.json({ media: row.media || 0 });
  });
});

app.post('/api/nota/amortesalva', (req, res) => {
  const { nota } = req.body;
  const stmt = db.prepare('INSERT INTO jacnotas (valor, peca) VALUES (?, "amortesalva")');
  
  stmt.run(nota, function(err) {
      if (err) {
          res.status(500).send('Erro ao salvar a nota');
          return;
      }
      res.status(200).send('Nota salva com sucesso!');
  });

  stmt.finalize();
});

app.get('/api/media/amortesalva', (req, res) => {
db.get('SELECT AVG(valor) AS media FROM jacnotas WHERE peca = "amortesalva"', (err, row) => {
    if (err) {
        res.status(500).send('Erro ao calcular a média');
        return;
    }
    res.json({ media: row.media || 0 });
});
});


app.post('/api/nota/sina', (req, res) => {
  const { nota } = req.body;
  const stmt = db.prepare('INSERT INTO jacnotas (valor, peca) VALUES (?, "sina")');
  
  stmt.run(nota, function(err) {
      if (err) {
          res.status(500).send('Erro ao salvar a nota');
          return;
      }
      res.status(200).send('Nota salva com sucesso!');
  });

  stmt.finalize();
});

app.get('/api/media/sina', (req, res) => {
db.get('SELECT AVG(valor) AS media FROM jacnotas WHERE peca = "sina"', (err, row) => {
    if (err) {
        res.status(500).send('Erro ao calcular a média');
        return;
    }
    res.json({ media: row.media || 0 });
});
});


app.post('/api/nota/raizes', (req, res) => {
  const { nota } = req.body;
  const stmt = db.prepare('INSERT INTO jacnotas (valor, peca) VALUES (?, "raizes da ignorancia")');
  
  stmt.run(nota, function(err) {
      if (err) {
          res.status(500).send('Erro ao salvar a nota');
          return;
      }
      res.status(200).send('Nota salva com sucesso!');
  });

  stmt.finalize();
});

app.get('/api/media/raizes', (req, res) => {
db.get('SELECT AVG(valor) AS media FROM jacnotas WHERE peca = "raizes da ignorancia"', (err, row) => {
    if (err) {
        res.status(500).send('Erro ao calcular a média');
        return;
    }
    res.json({ media: row.media || 0 });
});
});

app.post('/api/nota/lindasdemorrer', (req, res) => {
  const { nota } = req.body;
  const stmt = db.prepare('INSERT INTO jacnotas (valor, peca) VALUES (?, "lindas de morrer")');
  
  stmt.run(nota, function(err) {
      if (err) {
          res.status(500).send('Erro ao salvar a nota');
          return;
      }
      res.status(200).send('Nota salva com sucesso!');
  });

  stmt.finalize();
});

app.get('/api/media/lindasdemorrer', (req, res) => {
db.get('SELECT AVG(valor) AS media FROM jacnotas WHERE peca = "lindas de morrer"', (err, row) => {
    if (err) {
        res.status(500).send('Erro ao calcular a média');
        return;
    }
    res.json({ media: row.media || 0 });
});
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/pecasanteriores/avioesdepapel", avioesdepapelRouter);
app.use("/pecasanteriores/amortesalva", amortesalvaRouter);
app.use("/pecasanteriores", pecasanterioresRouter);
app.use("/pecasanteriores/sina", sinaRouter);
app.use("/pecasanteriores/raizesdaignorancia", raizIgnoRouter);
app.use("/pecasanteriores/lindasdemorrer", lindasRouter);
app.use("/login", loginRouter);
app.use("/cadastro", cadastroRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;