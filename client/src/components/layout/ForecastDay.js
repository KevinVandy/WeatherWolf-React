import React from 'react';

const ForecastDay = (info) => {
  const { fd } = info;
  const { date, day } = fd;
  const { condition, maxtemp_f, mintemp_f, totalprecip_in, maxwind_mph } = day;
  const { text, icon } = condition;
  return (
    <div className="card m p-1 all-center">
      <div className="all-center" style={ { fontSize: '2em' } }>
        { date }
      </div>
      <hr />
      <div className="grid-2">
        <div>
          <img src={ icon } alt={ icon } style={ { float: 'left', width: '75px' } } />
        </div>
        <div className="text-center-inline">
          { text }
        </div>
      </div>
      <hr />
      <p className="text-center">{ Math.round(maxwind_mph) } mph winds</p>
      <div className="grid-3 all-center">
        <div style={ { color: "blue", fontSize: "2em" } }>{ Math.round(mintemp_f) }</div>
        <div>{ Math.round(totalprecip_in * 100) }</div>
        <div style={ { color: "red", fontSize: "2em" } }>{ Math.round(maxtemp_f) }</div>
      </div>
    </div>
  );
};

export default ForecastDay;
