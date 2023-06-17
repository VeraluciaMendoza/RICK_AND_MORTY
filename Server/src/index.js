// const getCharById = require('./controllers/getCharById')


// // ================ CREANDO SERVIDOR CON EXPRESS ================ //
// const express = require('express');
// const server = express();
// const PORT = 3001;
// const router = require('./routes/index') ;

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

// server.use(express.json());
// server.use('/rickandmorty', router);

// server.listen(PORT, () => {
//   console.log('Server raised in port: ' + PORT);
// });

const server = require('./app');
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server rasied in port: ' + PORT)
    })
  })
  .catch(error => console.log(error.message));