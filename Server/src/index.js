// const http = require("http");
// const getCharById = require('./controllers/getCharById')
// const getCharDetail = require('./controllers/getCharDetail')
// // const characters = require('./utils/data.js')
// const PORT = 3001;

// http.createServer(function(req, res) {
//   // permite hacer peticiones a cualquiera
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const id = req.url.split('/').pop();
  
//   if (req.url.includes("/rickandmorty/character")) {
//     getCharById(res, id);
//   }

//   if (req.url.includes("detail")) {
//     getCharDetail(res, id);
//   }

//   // if (req.url.includes("/rickandmorty/character")) {
//   //   const id = req.url.split('/').pop();
//   //   const character = characters.filter(char => char.id == Number(id));
//   //   res.writeHead(200, { 'Content-Type': 'application/json' })
//   //   res.end(JSON.stringify(character))
//   // }

// }).listen(PORT, 'localhost');  

// ================ CREANDO SERVIDOR CON EXPRESS ================ //
const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});