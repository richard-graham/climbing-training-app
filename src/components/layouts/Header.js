import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Create from '../exercises/dialogs/Create'

export default props => 
  <AppBar position="static">
    <Toolbar>
    <Typography variant="headline" color='inherit'>
      Dashboard
    </Typography>

    <Create />
    </Toolbar>
  </AppBar>