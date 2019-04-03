import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Create from '../exercises/Dialog'

export default ({ groups, onExerciseCreate }) => 
  <AppBar position="static">
    <Toolbar>
    <Typography variant="headline" color='inherit' style={{flex: 1}}>
      Dashboard
    </Typography>

    <Create 
      groups={groups}
      onCreate={onExerciseCreate}
    />
    </Toolbar>
  </AppBar>