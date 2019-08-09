import { SET_LOADING, SEARCH_WEATHER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false
      };
    default:
      return state;
  };
};