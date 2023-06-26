// EN ACTIONS NO SE MANEJA LOGICA //
import axios from 'axios';
import { FILTER, ORDER } from './types';

const ENDPOINT = 'http://localhost:3001/rickandmorty/fav'

export const addFav = (character) => {
  console.log(character, 'action')
  return async (dispatch) => {
    try {
      const { data } = await axios.post(ENDPOINT, character);
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: 'ERROR',
        payload: error.message
      })
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${ENDPOINT}/${id}`);
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
        payload: error.message
      })
    }
  }
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order
  }
};
