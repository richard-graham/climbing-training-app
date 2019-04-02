import React, { Component, Fragment } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Button,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      time: '',
      description: '',
      phase: '',
      group: '',
    }
  }

  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: event.target.value
      }
    })
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open, exercise: { title, time, description, phase, group } } = this.state
    const { groups } = this.props

    return (
      <Fragment>
        <Button variant='fab' onClick={this.handleToggle} mini>
          <AddIcon />
        </Button>
        <Dialog
              open={open}
              onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <FormControl>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
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
              /><br />
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline
              /><br />
              <FormControl>
                <InputLabel htmlFor="group">Training Type</InputLabel>
                <Select
                  value={group}
                  onChange={this.handleChange('group')}
                >
                  {groups.map(group => {
                    return <MenuItem value={group}>
                      {group}
                    </MenuItem>
                  })}
          </Select>
        </FormControl>

            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant='raised' >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
} 


export default Create