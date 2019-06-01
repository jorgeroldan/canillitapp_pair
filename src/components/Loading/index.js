import React from 'react';

import Category from '../../Pages/Category'

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function Loading() {
  const classes = useStyles();

  return (
    <div>
        <LinearProgress color="secondary" />
    </div>
  );
}

export default Loading;
