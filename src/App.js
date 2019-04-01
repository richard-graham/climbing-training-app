import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Dashboard from './components/dashboard'
import { groups, exercises } from './store'

class App extends Component {
  state = {
    exercises
  }

  getExercisesByGroups() {
    return this.state.exercises.reduce((exercises, exercise) => {
      const { group } = exercise.group
    })
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Dashboard />
        
        <Footer 
          groups={groups}
        />
      </Fragment>
    );
  }
}

export default App;
