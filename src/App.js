import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { groups, exercises } from './store'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from './context'


class App extends Component {
  state = {
    exercises,
    exercise: {},
  }

  getContext = () => ({
    groups,
    ...this.state
  })

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

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({ 
      exercises: exercises.filter(ex => ex.id !== id ), // filters out instances where the exercise id is the same as the id passed in
      editMode: exercise.id === id ? false : editMode, 
      exercise: exercise.id === id ? {} : exercise // if deleting the currently selected exercise reset current exercise, if not carry on
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({ // exercises = prevState
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id), // remove old instance of exercise
        exercise // replace it with the new version
      ],
      exercise // updates the currently selected exercise 
    }))
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({ // grabs exercises (an array of all the exercises) from state as 'prevState' as setState is asynchronous and something else in the app may change state while we are calling it
      exercise: exercises.find(ex => ex.id === id),
      editMode: false // Because you want to view and not edit
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({ // same as handleExerciseSelect except changes editMode
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  handleGroupSelect = selectedGroup => {
    this.setState({ 
       selectedGroup
    })
  }
 
  render() {
    const exercises = this.getExercisesByGroups(),
    { editMode, exercise, selectedGroup } = this.state
    
    return (
      <Provider value={this.getContext()}>
        <Fragment>
          <CssBaseline />
          <Header 
            onExerciseCreate={this.handleExerciseCreate}
          />
          <Exercises 
            editMode={editMode}
            exercises={exercises} 
            groups={groups}
            onDelete={this.handleExerciseDelete}
            onEdit={this.handleExerciseEdit}
            onSelect={this.handleExerciseSelect}
            onSelectEdit={this.handleExerciseSelectEdit}
            exercise={exercise}
            selectedGroup={selectedGroup}
          />
          
          <Footer 
            selectedGroup={selectedGroup}
            groups={groups}
            onSelect={this.handleGroupSelect}
          />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
