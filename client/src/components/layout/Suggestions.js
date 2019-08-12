import React from 'react';
import Suggestion from './Suggestion';
import Spinner from '../layout/Spinner';

const Suggestions = ({ text, locations, loading }) => {

  // useEffect(() => {
  //   setIsLoading(true)
  //   return () => {
  //     searchLocations(text);
  //   };
  //   // eslint-disable-next-line
  // }, []);

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
        { text }
        No Suggestions
      </>
    );
  } else {
    console.log(locations);
    return (
      <>
        <div className="tt-menu">
          { text }
          <table>
            { locations.map(location => <tr><td><Suggestion location={ location } key={ location.id } /></td></tr>) }
          </table>
        </div>
      </>
    );
  }
};

export default Suggestions;
