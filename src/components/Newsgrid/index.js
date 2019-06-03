import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Newitem from '../Newsitem';

import Slider from '../Slider'
import PostSub from '../../components/PostSub'

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

const Newsgrid = ({classes, news}) =>  {

  return (
    
    <div className={classes.root}>
    <Slider />
    <PostSub />
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[3]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[4]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[5]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[3]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[4]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[4]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[5]}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Newitem data={news[3]}/>
        </Grid>
      </Grid>
    </div>
  );
}

Newsgrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Newsgrid);
