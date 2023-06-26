import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: false,
  // character: {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    // case 'ADD_FAV':
    //   return { ...state, myFavorites: payload, allCharacters: payload };
    // case 'REMOVE_FAV':
    //   return { ...state, myFavorites: payload };
    case ADD_FAV: {
      return { ...state, myFavorites: payload, allCharacters: payload, errors: false }
    }
    case REMOVE_FAV: {
      return { ...state, myFavorites: payload, errors: false };
    }

    // case REMOVE_FAV: {
    //   // return { ...state, myFavorites: payload };
    //   const filter = state.myFavorites.filter(favorite => favorite.id !== payload)
    //   return {
    //     ...state,
    //     myFavorites: filter
    //   }
    // }
    case FILTER: {
      // Caso "All"
      if (payload === "All") return {
        ...state,
        myFavorites: state.allCharacters
      }
      const allCharactersCopy = [...state.allCharacters]
      const filteredCharacters = allCharactersCopy.filter(character => character.gender === payload)
      return {
        ...state,
        myFavorites: filteredCharacters
      }
    }
    case ORDER: {
      let orderCharacters = [];
      const charactersCopy = [...state.allCharacters];
      if(payload === 'A') {
        orderCharacters = charactersCopy.sort(
          (a, b) => a.id - b.id
        )
      } else if (payload === 'D') {
        orderCharacters = charactersCopy.sort(
          (a, b) => b.id - a.id
        )
      }
      console.log(orderCharacters)
      return {
        ...state,
        myFavorites: orderCharacters
      }
    }
    default: {
      return { ...state }
    }
  }
};

export default reducer;