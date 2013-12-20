/* global require, dbWrapper:true, process, console, __dirname*/
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var messages = require('./controllers/messages');
var app = express();

console.log('ENV:'+process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production') {
  var pg = require('pg');
  db = new pg.Client(process.env.DATABASE_URL);
  db.connect(function(){});
  da = require('./data_access/postgres.js');
}
else {
  var sqlite3 = require('sqlite3').verbose();
  db = new sqlite3.Database('data.dat');
  da = require('./data_access/sqlite.js');
  app.use(express.errorHandler());
}


// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/:receiver', messages.index);
app.get('/:receiver/utf8', messages.utf8);
app.post('/:receiver', messages.send);


http.createServer(app).listen(app.get('port'), function(){
  'use strict';
  console.log('Express server listening on port ' + app.get('port'));
});