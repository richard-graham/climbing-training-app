import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Dashboard from './components/dashboard'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Dashboard />
        
        <Footer />
      </Fragment>
    );
  }
}

export default App;
