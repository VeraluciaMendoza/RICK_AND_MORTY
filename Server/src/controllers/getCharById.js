const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {÷
  // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then(response => response.data)
  //   .then(data => {
  //     const character = {
  //       id: id,
  //       name: data.name,
  //       gender: data.gender,
  //       species: data.species,
  //       origin: data.origin.name,
  //       image: data.image,
  //       status: data.status
  //     };
  //     res.writeHead(200, { "Content-type": "application/json" })
  //     res.end(JSON.stringify(character))
  //   })
  //   .catch(error => {
  //     res
  //       .writeHead(500, { "Content-type": "text/plain" })
  //       .end(`Error: personaje con ${id} no encontrado - ${error}`)
  //   })
// }

const getCharById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const response = await axios.get(URL + id);
    const { name, gender, species, origin, image, status } = response.data;
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status
    };
    res.status(200).json(character) 
  } catch (error) {
    return res.status(500).send(error.message)
  }

  //  axios.get(URL + id)
  //    .then(({ data }) => {
  //      const { name, gender, species, origin, image, status } = data;
  //      const character = {
  //        id,
  //        name,
  //        gender,
  //        species,
  //        origin,
  //        image,
  //        status
  //      };
  //      return character.name
  //      ? res.status(200).json(character)
  //      : res.status(404).json('Not found')
  //    })
  //    .catch(error => {
  //     return res.status(500).send(error.message)
  //    })
}

module.exports = getCharById;