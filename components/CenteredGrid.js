import React from 'react';
import {Dimensions, View} from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleKeyBoard from './SimpleKeyboard';
import Cafe2 from './../assets/cafe2.jpg';
import Cafe1 from './../assets/cafe1.jpg';
import OutLineLogo from './../assets/logo.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    padding: "100px",
    backgroundColor: 'transparent',
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: ".5%",
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    marginLeft: "40%",
    marginRight: "40%",
    height: 225,
  },
  cardContainer: {
    backgroundImage: `url(${Cafe2})`,
    height: 1100,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();
  const {width, height} = Dimensions.get("window");
  return (
    <div className={classes.root}>
      <CardMedia  className={classes.cardContainer}>
        <Grid  spacing={3}>
          <Grid item lg={12}>
          </Grid>
          <Grid  item lg={12}>
            <Paper className={classes.paper}><SimpleKeyBoard></SimpleKeyBoard></Paper>
          </Grid>
          
          <Grid item lg={12}>
            <CardMedia image={OutLineLogo} className={classes.paper2}></CardMedia>
          </Grid>
          
        </Grid>
      </CardMedia>
    </div>
  );
}