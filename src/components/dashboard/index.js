import React from 'react'
import { Grid } from '@material-ui/core/'
import Directory from './Directory';
import InfoPanel from './InfoPanel'

const styles  = {
  Paper: {
    padding: 20,
  }
}

export default props =>
  <Grid container>
    <Grid item sm>
      <Directory styles={styles} />
    </Grid>
    <Grid item sm>
      <InfoPanel styles={styles} />
    </Grid>
  </Grid>