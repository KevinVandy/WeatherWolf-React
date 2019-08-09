import React, { useContext, useEffect, useState } from 'react';
import LocationContext from '../../context/location/locationContext';
import Suggestion from './Suggestion';
import Spinner from '../layout/Spinner';

const Suggestions = (info) => {

  const { text } = info;
  const locationContext = useContext(LocationContext);
  const { loading, locations, searchLocations } = locationContext;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    return () => {
      searchLocations(text);
    };
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <>
        { text } loading
        <Spinner />
      </>
    );
  } else if (locations == null) {
    return (
      <>
        { text } null
        No Suggestions
      </>
    );
  } else {
    return (
      <>
        <div className>
          { text }
          <table>
            { locations.map(s => <tr><td><Suggestion s={ s } key={ s.id } /></td></tr>) }
          </table>
        </div>

      </>
    );
  }
};

export default Suggestions;
