import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar nav-fixed bg-primary'>
        <Link to='/home'><h1>Weather Wolf</h1></Link>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
        </ul>
      </nav>
      <div className='navbar-spacer'></div>
    </Fragment>
  );
};

export default Navbar;
