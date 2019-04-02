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

export default ({ exercises, selectedGroup }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => { // group = group name (i.e Conditioning & Flexibility) exercises = entries that have group value that equals group name
          
          return !selectedGroup || selectedGroup === group // only display when selectedGroup is not specified (i.e the All tab is selected) OR selectedGroup and group are equal 
          ? <React.Fragment>
              <Typography
                variant='headline'
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ title }) => {
                  console.log(group);
                  console.log(selectedGroup);
                  return (
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  )
                })}
              </List>
            </React.Fragment>
          : null
            }
        )}
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