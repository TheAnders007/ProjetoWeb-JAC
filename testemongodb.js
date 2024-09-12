var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

mongoose.connect('mongodb+srv://theanders:snace602@cluster0.bs4xe.mongodb.net/Login-tut?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
})

app.use(bodyParser.json());

const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
})

const Item = mongoose.model('Item', ItemSchema);

app.post('/items', async (req, res) => {
  const {name, quantity} = req.body;

  try{
    const newItem = new Item({name, quantity});
    
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).send(err.message);
  }
})
