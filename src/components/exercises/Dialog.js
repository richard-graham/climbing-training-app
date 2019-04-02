import React, { Component, Fragment } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  Fab
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Form from './Form'


class Create extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state,
          { groups, onCreate } = this.props

    return (
      <Fragment>
        <Fab onClick={this.handleToggle} size='medium' color="secondary" >
          <AddIcon />
        </Fab>
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
            <Form 
              groups={groups}
              onSubmit={onCreate}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
} 


export default Create