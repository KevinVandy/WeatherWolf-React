import React, { useReducer } from 'react';
import LocationContext from './locationContext';
import LocationReducer from './locationReducer';
import Axios from 'axios';
import { SET_LOADING, SEARCH_LOCATIONS, SEARCH_CITIES, SEARCH_STATEPROVINCES, SEARCH_COUNTRIES } from '../types';

const searchBASE = 'http://localhost:9999/location/search';
const searchCityBASE = 'http://localhost:9999/location/searchcity';
const searchStateProvinceBASE = 'http://localhost:9999/location/searchstateprovince';
const searchCountryBASE = 'http://localhost:9999/location/searchcountry';

const LocationState = (props) => {

  const initialState = {
    locations: [],
    cities: [],
    stateProvinces: [],
    countries: [],
    loading: false
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  //methods
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const searchLocations = async (text) => {
    setLoading();
    const apiurl = `${ searchBASE }?q=${ encodeURI(text) }`
    console.log("apiurl: " + apiurl);
    const res = await Axios.get(apiurl);
    dispatch({
      type: SEARCH_LOCATIONS,
      payload: res.data
    });
  };

  const searchCities = async (text) => {
    setLoading();
    const apiurl = `${ searchCityBASE }?q=${ encodeURI(text) }`
    console.log("apiurl: " + apiurl);
    const res = await Axios.get(apiurl);
    dispatch({
      type: SEARCH_CITIES,
      payload: res.data
    });
  };

  const searchStateProvinces = async (text) => {
    setLoading();
    const apiurl = `${ searchStateProvinceBASE }?q=${ encodeURI(text) }`
    console.log("apiurl: " + apiurl);
    const res = await Axios.get(apiurl);
    dispatch({
      type: SEARCH_STATEPROVINCES,
      payload: res.data
    });
  };

  const searchCountries = async (text) => {
    setLoading();
    const apiurl = `${ searchCountryBASE }?q=${ encodeURI(text) }`
    console.log("apiurl: " + apiurl);
    const res = await Axios.get(apiurl);
    dispatch({
      type: SEARCH_COUNTRIES,
      payload: res.data
    });
  };

  return (
    <LocationContext.Provider
      value={ {
        loading: state.loading,
        locations: state.locations,
        cities: state.cities,
        stateProvinces: state.stateProvinces,
        countries: state.countries,
        searchLocations,
        searchCities,
        searchStateProvinces,
        searchCountries
      } }
    >
      { props.children }
    </LocationContext.Provider>
  );
};

export default LocationState;