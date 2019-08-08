import React, { useState, useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';
import Autocomplete from "react-async-autocomplete";

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
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="text" placeholder="City, [State/Province], [Country]" value={ text } onChange={ onChange } required />
              <Autocomplete
                ref="autocomplete"
                renderItem={ MyItemView }
                onChange={ onChange }
                onSelect={ onSelect }
              />
            </td>
            <td>
              <select name="units">
                <option value="F" defaultValue>F&deg;</option>
                <option value="C">C&deg;</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="submit" value="See Forecast" className="btn-block btn-dark p" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default SearchBar;
