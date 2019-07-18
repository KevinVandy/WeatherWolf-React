import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import WeatherContext from '../../context/weather/weatherContext';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const SearchResult = (searchText) => {

  const weatherContext = useContext(WeatherContext);
  const { loading, weather, searchWeather } = weatherContext;
  const { location, current, forecast } = weather;

  useEffect(() => {
    return () => {
      searchWeather(searchText);
    };
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <Spinner />
    );
  } else if (weather.location == null) {
    return (
      <Fragment>

      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <CurrentWeather location={ location } current={ current } />
        <Forecast forecast={ forecast } />
      </Fragment>
    );
  }
};

export default SearchResult;
