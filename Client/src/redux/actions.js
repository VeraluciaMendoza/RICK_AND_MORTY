import axios from 'axios';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ALL_CHARACTERS = 'ALL_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

const URL = 'http://localhost:3001/rickandmorty/fav'

// EN ACTIONS NO SE MANEJA LOGICA //

// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character
//   }
// };

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id
//   }
// }

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL, character);
      return dispatch({
        type: 'ADD_FAV',
        payload: response.data,
      });
    } catch (error) {
      console.log(error,'aqui')
      return dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL + id);
      return dispatch({
        type: 'REMOVE_FAV',
        payload: response.data,
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  }
};

export const getAllCharacters = (characters) => {
  return {
    type: ALL_CHARACTERS,
    payload: characters
  }
};

export const getCharacter = (id) => {
  return {
    type: GET_CHARACTER,
    payload: id
  }
}

export const removeCharacter = (id) => {
  return {
    type: REMOVE_CHARACTER,
    payload: id
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden
  }
}
