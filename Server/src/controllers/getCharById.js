const axios = require('axios');

const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
      const character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
      };
      res.writeHead(200, { "Content-type": "application/json" })
      res.end(JSON.stringify(character))
    })
    .catch(error => {
      res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(`Error: personaje con ${id} no encontrado - ${error}`)
    })
}

module.exports = getCharById;