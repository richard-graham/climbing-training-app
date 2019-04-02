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
 import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  FormControl: {
    width: 500,

  }
})

class Form extends Component {
  state = this.getInitState()

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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = () => {
    // TODO: Validate Form

    const { exercise } = this.state

    this.props.onSubmit({
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      exercise: {
        title: '',
        time: '',
        description: '',
        phase: '',
        group: '',
      }
    })

  }

  render() {
    const { classes, groups } = this.props,
          { title, time, description, phase, group } = this.state
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.FormControl}
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
          className={classes.FormControl}
        /><br />
        <TextField
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          multiline
          className={classes.FormControl}
        /><br />
        <FormControl
          className={classes.FormControl}
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
        <Button 
          color="primary" 
          variant='contained' 
          onClick={this.handleSubmit}
        >
          Create
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(Form)