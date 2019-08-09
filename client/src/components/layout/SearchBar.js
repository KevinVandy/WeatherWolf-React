import React, { useState, useContext } from 'react';
import LocationContext from '../../context/location/locationContext';
import WeatherContext from '../../context/weather/weatherContext';
import { asyncContainer, Typeahead, AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchBar = () => {

  const locationContext = useContext(LocationContext);
  const weatherContext = useContext(WeatherContext);

  //const { loading, locations } = locationContext;

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
              <input type="text" name="location" placeholder="City, [State/Province], [Country]" value={ text } onChange={ onChange } style={ { minWidth: '300px' } } required />

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
