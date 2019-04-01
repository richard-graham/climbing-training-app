import React from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core/'

const styles  = {
  Paper: {
    padding: 10,
    margin: 10,
    height: 690,
    overflowY: 'auto'
  }
}

export default ({ exercises }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => {
          return (
          <React.Fragment>
            <Typography
              variant='headline'
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ title }) => {
                 return (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                 )
              })}
            </List>
          </React.Fragment>
          )
        })}
    </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
          <Typography
            variant='display1'
           >
            Welcome!
          </Typography>
          <Typography
            variant='subheading'
            style={{marginTop: 20}}
           >
            Please select an exercise from the list on the left
          </Typography>
      </Paper>
    </Grid>
  </Grid>