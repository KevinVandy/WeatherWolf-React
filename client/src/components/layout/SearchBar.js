import React, { useState, useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';

const SearchBar = () => {

  const weatherContext = useContext(WeatherContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    weatherContext.searchWeather(text);
    setText('');
  }

  return (
    <form className="form" onSubmit={ onSubmit }>
      <div className="grid-2">
        <input type="text" name="text" placeholder="City, [State/Province], [Country]" value={ text } onChange={ onChange } required />
        <select name="units">
          <option value="F" selected>F&deg;</option>
          <option value="C">C&deg;</option>
        </select>
      </div>
      <input type="submit" value="See Forecast" className="btn-block btn-dark p" />

    </form>
  );
};

export default SearchBar;
