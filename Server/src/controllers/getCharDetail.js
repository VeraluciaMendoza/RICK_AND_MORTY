const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(URL + id);
    const character = {
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      status: response.data.status,
      origin: response.data.origin?.name,
      species: response.data.species
    };  
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }

  // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  // .then(response => response.data)
  // .then(data => {
  //   const character = {
  //     image: data.image,
  //     name: data.name,
  //     gender: data.gender,
  //     status: data.status,
  //     origin: data.origin?.name,
  //     species: data.species
  //   };
  //   res.writeHead(200, { "Content-type": "application/json" })
  //   res.end(JSON.stringify(character))
  // })
  // .catch(error => {
  //   res
  //     .writeHead(500, { "Content-type": "text/plain" })
  //     .end(`Error: personaje con ${id} no encontrado - ${error}`)
  // }) 
}

module.exports = getCharDetail;