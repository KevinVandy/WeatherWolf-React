import { SEARCH_WEATHER, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  };
};