import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Newitem from '../Newsitem';

import Slider from '../Slider'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Newsgrid = (props) =>  {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Slider />
        </Grid>
        <Grid item xs={12} sm={6}>
         <Newitem />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Newitem />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem />
        </Grid>
      </Grid>
    </div>
  );
}

Newsgrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Newsgrid);
