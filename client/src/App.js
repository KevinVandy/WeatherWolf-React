//import React and React components
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//AUTH0
import { useAuth0 } from "./Auth0Wrapper";
import PrivateRoute from "./components/PrivateRoute";

//import pages for routes
import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
import Account from "./components/pages/Account"
import NotFound from './components/pages/NotFound';

//import State
import WeatherState from './context/weather/WeatherState';

//import components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

//import styles
import './css/App.css';
import Spinner from './components/layout/Spinner';


const App = () => {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <WeatherState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/home' component={ Home } />
              <Route exact path='/weather' component={ Weather } />
              <PrivateRoute path='/account' component={ Account } />
              <Route component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </WeatherState>
  );
};

export default App;
