const axios = require('axios');

const getCharDetail = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.data)
  .then(data => {
    const character = {
      image: data.image,
      name: data.name,
      gender: data.gender,
      status: data.status,
      origin: data.origin?.name,
      species: data.species
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

module.exports = getCharDetail;