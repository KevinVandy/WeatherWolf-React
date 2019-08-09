import React from 'react';

const Suggestion = (info) => {
  const { location } = info;
  return (
    <div>
      { location }
      <strong>{ location.city }</strong>, { location.stateProvince }, { location.country }
    </div>
  );
};

export default Suggestion;
