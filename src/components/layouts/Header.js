import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Create from '../exercises/Dialog'
import { withStyles } from '@material-ui/core/styles' 

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(
  ({ classes, onExerciseCreate }) => 
  <AppBar position="static">
    <Toolbar>
    <Typography variant="headline" color='inherit' className={classes.flex}>
      Dashboard
    </Typography>

    <Create onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
)