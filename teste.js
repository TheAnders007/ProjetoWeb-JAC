require('dotenv').config();

var express = require('express');

var app = express();

console.log('SESSION_SECRET:', process.env.SESSION_SECRET);