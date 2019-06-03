import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Newsitem from '../Newsitem';

import Slider from '../Slider'

import Destacadas from '../Destacadas'

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

  const ultimasNoticias = news.slice(3, 10)

  return (
     
    <div className={classes.root}>
      <Slider />
      <Destacadas />

      <Grid container spacing={3} >
        <Grid item xs={6} sm={3}>
          {ultimasNoticias.map(item => (
                    <div key={item.news_id}>
                        <Newsitem {...item} />
                    </div>
                ))}
        </Grid>
      </Grid>
    </div>
  );
}

Newsgrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Newsgrid);
