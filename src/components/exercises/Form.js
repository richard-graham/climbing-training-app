import React, { Component } from 'react'
import { 
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
 } from '@material-ui/core'


class Form extends Component {
  state = this.getInitState()

  componentWillReceiveProps = ({ exercise }) => {
    this.setState({
      ...exercise
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = () => {

    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state
      
    })

    this.setState(this.getInitState()) //clears out form
  }

  getInitState() {
    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      time: '',
      description: '',
      phase: '',
      group: '',
    }
  }

  render() {
    const { exercise, groups } = this.props,
          { title, time, description, group } = this.state
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          fullWidth
        /><br />
        <TextField
          type='number'
          label="Time"
          value={time}
          onChange={this.handleChange('time')}
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">Minutes</InputAdornment>,
          }}
          fullWidth
        /><br />
        <TextField
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          multiline
          fullWidth
        /><br />
        <FormControl
          fullWidth
        >
          <InputLabel htmlFor="group">Training Type</InputLabel>
          <Select
            value={group}
            onChange={this.handleChange('group')}
          >
            {groups.map(group => {
              return <MenuItem value={group} key={group} >
                {group}
              </MenuItem>
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <Button 
          color="primary" 
          variant='contained' 
          onClick={this.handleSubmit}
        >
          {exercise 
          ? 'Edit' // if exercise exists then we are dealing with an existing exercise so need to edit
          : 'Create'
         }
        </Button>
      </form>
    )
  }
}

export default Form