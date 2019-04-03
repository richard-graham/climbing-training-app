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
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  paper: {
    padding: 10,
    height: '100%',
    overflowY: 'auto'
  },
  '@global': {
    'html, body, #root': {
      height: '100%',
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

export default withStyles(styles)(
    ({ 
    classes,
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
    <Grid container className={classes.container}>
      <Grid item className={classes.item} xs={12} sm={6} > 
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) => { // group = group name (i.e Conditioning & Flexibility) exercises = array of objects which are entries that have group value that equals group name
            
            return !selectedGroup || selectedGroup === group // only display when selectedGroup is not specified (i.e the All tab is selected) OR selectedGroup and group are equal 
            ? <React.Fragment key={group} >
                <Typography
                  color='secondary'
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
                        <IconButton color='primary' onClick={() => onSelectEdit(id)} >
                            <Edit />
                          </IconButton>
                          <IconButton color='primary' onClick={() => onDelete(id)} >
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
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography
            color='secondary'
            gutterBottom
            variant='display1'
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
)