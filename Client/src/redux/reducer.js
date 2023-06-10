import { ADD_FAV, REMOVE_FAV, GET_CHARACTER, REMOVE_CHARACTER, ALL_CHARACTERS } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  character: {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case ADD_FAV: {
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload]
      }
    }
    case REMOVE_FAV: {
      const filter = state.myFavorites.filter(favorite => favorite.id !== payload)
      return {
        ...state,
        myFavorites: filter
      }
    }case ALL_CHARACTERS: {
      return {
        ...state,
        allCharacters: payload
      }
    }
    case GET_CHARACTER: {
      const finded = state.allCharacters.find(character => character.id === payload)
      return {
        ...state,
        character: finded
      }
    }
    case REMOVE_CHARACTER: {
      const filter = state.allCharacters.filter(character => character.id !== payload)
      return {
        ...state,
        allCharacters: filter
      }
    }
    default: {
      return { ...state }
    }
  }
};

export default reducer;