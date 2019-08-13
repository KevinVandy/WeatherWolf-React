import React from 'react';
import Suggestion from './Suggestion';
import Spinner from '../layout/Spinner';

const Suggestions = ({ text, locations, loading }) => {


  return (
    <>
      <div className="tt-menu">
        {
          (loading) ?
            <Spinner />
            :
            (locations != null && locations.length > 0) ?
              <table>
                { locations.map(location => <tr><td><Suggestion location={ location } key={ location.id } /></td></tr>) }
              </table>
              : //else
              <div>No Suggestions for { text }</div>
        }
      </div>
    </>
  );
};

export default Suggestions;
