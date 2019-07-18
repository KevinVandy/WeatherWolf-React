import React, { Component, useEffect, useContext, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNav from './components/AppNav';

import { CLIENT_VERSION, REACT_VERSION, SERVER_URL } from './config';
import 'whatwg-fetch';
import Footer from "./components/Footer";

const App = () => {

  state = {
    serverInfo: {},
    clientInfo: {
      version: CLIENT_VERSION,
      react: REACT_VERSION
    },
    collapse: false
  }

  useEffect(() => {
    fetch(SERVER_URL + '/application')
      .then(r => r.json())
      .then(json => this.setState({ serverInfo: json }))
      .catch(error => console.error('Error connecting to server: ' + error));
  }, [])

  const { serverInfo, clientInfo, collapse } = this.state;

  return (
    <Fragment>
      <AppNav />
      <p>WeatherWolf</p>
      <Footer key={ 3 } />
    </Fragment>

  );
}


export default App;
