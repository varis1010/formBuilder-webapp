import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

 const Loader = () => {
  const classes = useStyles();
  return (
   <div className={classes.root}>
      <CircularProgress style={{ 
              display: 'inline-block',
              position: 'relative',
              margin: '125px auto',
              textAlign: "center" }} />
    </div>
  );
}

export default Loader
