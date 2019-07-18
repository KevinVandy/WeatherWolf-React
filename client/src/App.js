//import React and React components
import React, { Component, useEffect, useContext, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import pages for routes
import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
import NotFound from './components/pages/NotFound';

//import State
import AccountState from './context/account/AccountState';
import WeatherState from './context/weather/WeatherState';

//import components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

//import styles
import './css/App.css';


const App = () => {
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
