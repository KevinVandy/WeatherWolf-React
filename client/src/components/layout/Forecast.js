import React from 'react';
import ForecastDay from './ForecastDay';

const Forecast = (props) => {
  const { forecast } = props;
  const { forecastday } = forecast;
  return (
    <div id="forecast" className="all-center">
      <h2 className="text-center text-light m-1">5 Day Forecast</h2>
      <div className="grid-5" id="fiveday">
        { forecastday.map(fd => <ForecastDay fd={ fd } key={ fd.date } />) }
      </div>
    </div>
  );
};

export default Forecast;
