import React, { Fragment } from 'react';
import spinner from '../../images/spinner.svg';

const Spinner = () => {
  return (
    <Fragment>
      <img src={ spinner } alt="Loading" style={ { width: '200px', margin: 'auto', display: 'block' } } />
    </Fragment>
  );
};

export default Spinner;
