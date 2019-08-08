import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../Auth0Wrapper";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <nav className='navbar nav-fixed bg-primary'>
        <Link to='/home'><h1>Weather Wolf</h1></Link>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          { !isAuthenticated &&
            (
              <li>
                <a href="#" onClick={ () => loginWithRedirect({}) } >Log in </a>
              </li>
            )
          }

          { isAuthenticated &&
            <>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <a onClick={ () => logout() }>Log out</a>
              </li>
            </>
          }
        </ul>
      </nav>
      <div className='navbar-spacer'></div>
    </>
  );
};

export default Navbar;
