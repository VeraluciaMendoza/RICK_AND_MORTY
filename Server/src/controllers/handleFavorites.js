let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
  const { id } = req.params;
  console.log(id, 'iiidooooo')
  const deletedChar = myFavorites.filter(favorite => favorite.id !== id);
  myFavorites = deletedChar;
  return res.json(myFavorites)
}

module.exports = {
  postFav, 
  deleteFav
}
