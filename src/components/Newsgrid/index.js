import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Newsitem from '../Newsitem';

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

const Newsgrid = ({ classes, news }) => {
  const destacada = news[0]

  const secundarias = news.slice(1, 3).map(newsItem => {
    return (
    <Grid item xs={12} sm={6} key={newsItem.url}>
      <Newsitem data={newsItem} height="300" />
    </Grid>
    )
  })

  const grillaRoll = news.slice(3, 11).map(newsItem => {
    return (
    <Grid item xs={6} sm={3} key={newsItem.url}>
      <Newsitem data={newsItem} height="140"/>
    </Grid>
    )
  })
  return (
    <div className={classes.root}> 
    <Grid item xs={12}>
        <Slider news={destacada} />
        </Grid> 
      <Grid container spacing={3}> 
        {secundarias}
        {grillaRoll}
      </Grid>
    </div>
  );
}

Newsgrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Newsgrid);
