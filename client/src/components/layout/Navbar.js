import React from 'react';
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
            <li onClick={ () => loginWithRedirect({}) } >Log in</li>
          }
          { isAuthenticated &&
            <>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li onClick={ () => logout() }>Log out</li>
            </>
          }
        </ul>
      </nav>
      <div className='navbar-spacer'></div>
    </>
  );
};

export default Navbar;
