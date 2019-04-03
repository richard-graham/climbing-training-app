import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

export default withWidth()(
  ({ groups, onSelect, selectedGroup, width }) => {
    const index = selectedGroup
      ? groups.findIndex(group => group === selectedGroup) + 1 //returns the index of the first element in the array that satisfies the provided testing function
      : 0 // else resort to 'all' Tab

    const onIndexSelect = (e, index) => {
      onSelect(index === 0 ? '' : groups[index - 1])
    }
    
    return (
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          variant={width === 'xs' ? "scrollable" : null}
          centered={width !== 'xs' ? true : false}
        >
          <Tab label='All' />
          {groups.map(group => {
            return <Tab key={group} label={group} />
          })}
        </Tabs>
      </Paper>
    )
  }
)
  
