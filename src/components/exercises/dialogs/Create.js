import React, { Component, Fragment } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


class Create extends Component {
  state = {
    open: false 
  }

  render() {
    const { open } = this.state

    return (
      <Fragment>
        <Button variant='fab' color='primary' mini>
          <AddIcon />
        </Button>
        <Dialog
              open={open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <form>
                
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
} 


export default Create