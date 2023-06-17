import { ADD_FAV, REMOVE_FAV, GET_CHARACTER, REMOVE_CHARACTER, ALL_CHARACTERS, FILTER, ORDER } from "./actions";

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
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      }
    }
    case FILTER: {
      const filtered = state.allCharacters.filter(char => char.gender === payload)
      return {
        ...state,
        myFavorites: filtered
      }
    }
    case ORDER: {
      const orderCharacter = state.allCharacters.sort((a, b) => {
      if(payload === 'ascendente') {
        if (a.id < b.id) return - 1;
        if (b.id < a.id) return 1;
        return 0
      // DESCENDENTE
      } else {
        if (a.id < b.id) return 1;
        if (b.id < a.id) return - 1;
        return 0
      }
      })
      
      return {
        ...state,
        myFavorites: orderCharacter
      }
    }
    case REMOVE_FAV: {
      // return { ...state, myFavorites: payload };
      const filter = state.myFavorites.filter(favorite => favorite.id !== payload)
      return {
        ...state,
        myFavorites: filter
      }
    }
    case ALL_CHARACTERS: {
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