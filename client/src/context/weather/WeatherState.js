import React, { useReducer } from 'react';
import weatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import Axios from 'axios';
import { SEARCH_WEATHER, SET_LOADING } from '../types';

const BASE = 'https://api.apixu.com/v1/forecast.json';
const KEY = 'f91adb3427b540b39d7142223190307';
let NUMDAYS = 5;
let LANG = 'en';

const WeatherState = (props) => {

  const initialState = {
    weather: {},
    loading: false
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  //methods
  const searchWeather = async (text) => {
    setLoading();
    const apiurl = `${ BASE }?q=${ encodeURI(text) }&days=${ NUMDAYS }&lang=${ LANG }&key=${ KEY }`;
    console.log("apiurl: " + apiurl);
    const res = await Axios.get(apiurl);
    dispatch({
      type: SEARCH_WEATHER,
      payload: res.data
    });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <weatherContext.Provider
      value={ {
        weather: state.weather,
        loading: state.loading,
        searchWeather
      } }
    >
      { props.children }
    </weatherContext.Provider>
  );
};

export default WeatherState;
