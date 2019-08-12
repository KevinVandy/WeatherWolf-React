import React from 'react';

const Suggestion = ({ location }) => {
  return (
    <div>
      <strong>{ location.city }</strong>, { location.stateProvince }, { location.country }
    </div>
  );
};

export default Suggestion;
