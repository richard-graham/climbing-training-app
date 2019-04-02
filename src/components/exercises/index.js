import React from 'react'
import { 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  IconButton 
} from '@material-ui/core/'
import { Delete } from '@material-ui/icons'


const styles  = {
  Paper: {
    padding: 10,
    margin: 10,
    height: 690,
    overflowY: 'auto'
  }
}

export default ({ 
  exercises, 
  onDelete,
  onSelect, 
  selectedExercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left'
  }, 
  selectedGroup 
}) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => { // group = group name (i.e Conditioning & Flexibility) exercises = array of objects which are entries that have group value that equals group name
          
          return !selectedGroup || selectedGroup === group // only display when selectedGroup is not specified (i.e the All tab is selected) OR selectedGroup and group are equal 
          ? <React.Fragment key={group} >
              <Typography
                variant='headline'
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => { // the same as saying exercise.id and exercise.title
                  return (
                    <ListItem 
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)} >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
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
            {title}
          </Typography>
          <Typography
            variant='subheading'
            style={{marginTop: 20}}
           >
            {description}
          </Typography>
      </Paper>
    </Grid>
  </Grid>