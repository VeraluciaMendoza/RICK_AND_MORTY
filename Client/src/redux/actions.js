export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ALL_CHARACTERS = 'ALL_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character
  }
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id
  }
}

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
