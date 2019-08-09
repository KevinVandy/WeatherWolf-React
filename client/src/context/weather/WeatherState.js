import React, { useReducer } from 'react';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import Axios from 'axios';
import { SET_LOADING, SEARCH_WEATHER } from '../types';

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
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

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

  return (
    <WeatherContext.Provider
      value={ {
        loading: state.loading,
        weather: state.weather,
        searchWeather
      } }
    >
      { props.children }
    </WeatherContext.Provider>
  );
};

export default WeatherState;
