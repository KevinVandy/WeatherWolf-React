import { SET_LOADING, SEARCH_LOCATIONS, SEARCH_CITIES, SEARCH_STATEPROVINCES, SEARCH_COUNTRIES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false
      };
    case SEARCH_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading: false
      };
    case SEARCH_STATEPROVINCES:
      return {
        ...state,
        stateProvinces: action.payload,
        loading: false
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false
      };
    default:
      return state;
  };
};