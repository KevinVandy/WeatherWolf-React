import React, { useEffect, useContext } from 'react';
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
      <>
      </>
    );
  } else if (weather.location != null) {
    return (
      <>
        <CurrentWeather location={ location } current={ current } />
        <Forecast forecast={ forecast } />
      </>
    );
  } else {
    return (
      <div className="card">
        <p className="alert-danger">Invalid Search</p>
      </div>
    )
  }
};

export default SearchResult;
