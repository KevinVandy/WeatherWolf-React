import React, {Fragment} from 'react';
import SearchBar from '../layout/SearchBar';
import SearchResult from '../layout/SearchResult';

const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <SearchResult />
    </Fragment>
  );
};

export default Home;
