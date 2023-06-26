const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');
const server = express();

// Middleware
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(express.json());
server.use(morgan('dev'));

// Agrega path antes de cada ruta
server.use('/rickandmorty', router);

module.exports = server;