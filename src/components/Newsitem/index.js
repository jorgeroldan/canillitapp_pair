import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function Newitem({news_id, date, category, title, img_url, url}) {
  const classes = useStyles();

console.log('date', date)
console.log('news_id', news_id)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img_url}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={url} >
          Más info
        </Button>
      </CardActions>
    </Card>
  );
}

export default Newitem;
