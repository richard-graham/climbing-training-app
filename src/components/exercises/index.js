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
import { Delete, Edit } from '@material-ui/icons'
import Form from './Form'


const styles  = {
  Paper: {
    padding: 10,
    height: 690,
    overflowY: 'auto'
  }
}

export default ({ 
  editMode,
  exercise,
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left'
  }, 
  exercises, 
  groups,
  onDelete,
  onEdit,
  onSelect, 
  onSelectEdit,
  selectedGroup 
}) =>
  <Grid container>
    <Grid item xs={12} sm={6} > 
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
                      <IconButton onClick={() => onSelectEdit(id)} >
                          <Edit />
                        </IconButton>
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
    <Grid item xs={12} sm={6}>
      <Paper style={styles.Paper}>
        <Typography
          variant='display1'
          gutterBottom
          >
          {title}
        </Typography>
        {editMode
        ? <Form 
            exercise={exercise}
            groups={groups} 
            onSubmit={onEdit}
          />
        : <Typography
            variant='subheading'
            >
            {description}
          </Typography>
        }
      </Paper>
    </Grid>
  </Grid>