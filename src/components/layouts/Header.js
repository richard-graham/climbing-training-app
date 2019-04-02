import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Create from '../exercises/dialogs/Create'

export default ({ groups }) => 
  <AppBar position="static">
    <Toolbar>
    <Typography variant="headline" color='inherit' style={{flex: 1}}>
      Dashboard
    </Typography>

    <Create groups={groups} />
    </Toolbar>
  </AppBar>