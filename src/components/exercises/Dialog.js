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
  Select,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import Form from './Form'
import { Consumer } from '../../context'

const styles = theme => ({
  FormControl: {
    width: 500,

  }
})


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

  handleSubmit = () => {
    // TODO: Validate Form

    const { exercise } = this.state

    this.props.onCreate({
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

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open, exercise: { title, time, description, group } } = this.state
    const { classes } = this.props

    return (
      <Consumer>
        {({ groups }) => 
          <Fragment>
            <Fab onClick={this.handleToggle} size='medium' color="secondary" >
              <AddIcon />
            </Fab>
            <Dialog
                  open={open}
                  onClose={this.handleToggle}
                  fullWidth
                  maxWidth='xs'
            >
              <DialogTitle id="form-dialog-title">
                Create a New Exercise
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill out the form below.
                </DialogContentText>
                <Form groups={groups} onSubmit={this.handleSubmit} />
              </DialogContent>
              <DialogActions>
                <Button 
                  color="primary" 
                  variant='contained' 
                  onClick={this.handleSubmit}
                >
                  Create
                </Button>
              </DialogActions>
            </Dialog>
          </Fragment>
        }
      </Consumer>
    )
  }
} 


export default withStyles(styles)(Create)