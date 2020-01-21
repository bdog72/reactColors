//
//
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
// import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'black',
    transition: 'all 0.3s ease-in-out'
  }
};

function DraggableColorBox(props) {
  const { classes, handleClick, name, color } = props;
  return (
    // prettier-ignore
    <div className={classes.root} style={{backgroundColor:color}}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        {/* <DeleteForeverOutlinedIcon /> */}
        {/* <DeleteForeverIcon /> */}
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
