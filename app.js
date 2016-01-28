'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/[ENTER_ROUTE_NAME_HERE]');

app.get('/', function(req, res) {
  res.render('[ENTER_ROUTE_NAME_HERE]');
});

app.get(function(req, res) {
  res.status(404).render('404');
});

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});
