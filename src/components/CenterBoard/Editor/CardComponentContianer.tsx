import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import StepDialog from '../StepDialog/StepDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      minWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function CardComponentContianer(props: { type: String, category: String, label: String, icon: any}) {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {/* {props.label[0].toLocaleUpperCase()} */}
            {props.icon}
          </Avatar>
        }
        action={
          <StepDialog/>
        }
        title={props.type}
        subheader={props.category}
      />
      <CardContent style={{backgroundColor: '#ddd'}}>
        <InputBase
          style={{padding: 10, backgroundColor: `white`, textAlign: `center`, width: '100%'}}
          autoFocus={true}
          defaultValue={props.label}
          inputProps={{ 'aria-label': 'naked' }}
        />
        {/* <h2 style={{padding: 10, backgroundColor: `white`, textAlign: `center`}}>{props.label}</h2> */}
      </CardContent>
    </Card>
  );
}