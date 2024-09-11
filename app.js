var createError = require('http-errors');
var express = require('express');
var path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
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


// Configuração do banco de dados SQLite
const db = new sqlite3.Database('./jacnotas.db', (err) => {
  if (err) {
      console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
      console.log('Conectado ao banco de dados SQLite.');
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



// view engine setup
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