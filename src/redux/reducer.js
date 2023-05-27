import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: []
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
    }
    default: {
      return { ...state }
    }
  }
};

export default reducer;