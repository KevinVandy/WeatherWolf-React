import React from 'react';

const CurrentWeather = (info) => {
  const { location, current } = info;
  const { name, region, country } = location;
  const { condition, temp_f, wind_mph, wind_dir, humidity } = current;
  const { text, icon } = condition;

  return (
    <div id="currentWeather" className="card p-1 m-1">
      <div className="grid-2">
        <div className="all-center">
          <img src={ icon } alt={ icon } style={ { width: '100px' } } />
          <p>{ text }</p>
          <div className="grid-2">
            <div className="m-1">
              <p>{ Math.round(temp_f) }&deg;</p>
            </div>
            <div className="m-1">
              <p>{ humidity } % H</p>
            </div>
          </div>
          <p>{ Math.round(wind_mph) } mph { wind_dir } wind</p>
        </div>
        <div className="all-center">
          <h1>Current Weather</h1>
          <h2>{ name }, { region }<br />{ country }</h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
