import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { groups, exercises } from './store'

class App extends Component {
  state = {
    exercises,
    selectedExercise: {}
  }

  getExercisesByGroups() {

    return Object.entries( 
        this.state.exercises.reduce((exercises, exercise) => { 
          const { group } = exercise

          exercises[group] = exercises[group] // Check to see if exercise group exists in array and acts accordingly
            ? [...exercises[group], exercise] 
            : [exercise] 

          return exercises // creates an object where the key is the group and the value is an array of the objects that apply to it
      }, {})
    )
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({ // grabs exercises from state as 'prevState' as setState is asynchronous and something else in the app may change state while we are calling it
      selectedExercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleGroupSelected = selectedGroup => {
    this.setState({ 
       selectedGroup
    })
  }
 
  render() {
    const exercises = this.getExercisesByGroups(),
    { selectedGroup, selectedExercise } = this.state
    
    return (
      <Fragment>
        <Header 
          groups={groups}
        />

        <Exercises 
          exercises={exercises} 
          onSelect={this.handleExerciseSelected}
          selectedExercise={selectedExercise}
          selectedGroup={selectedGroup}
        />
        
        <Footer 
          selectedGroup={selectedGroup}
          groups={groups}
          onSelect={this.handleGroupSelected}
        />
      </Fragment>
    );
  }
}

export default App;
