import React from 'react';
import { List, ListItem, Typography, Grid } from '@material-ui/core';
import logo from './logo.svg';
import useStyles from './style.js';

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.header}>
          <Typography>Our Showroom is Open! (By Appointment Only)</Typography>
        </Grid>
      </Grid>
      <div className={classes.logo}>
        <img src={logo} className={classes.img} />
        urban natural home
      </div>

      <List className={classes.list}>
        <Grid container>
          <Grid item sm={3} md={2}>
            <ListItem> COLLECTIONS</ListItem>
          </Grid>
          <Grid item sm={3} md={2}>
            <ListItem> FURNITURE</ListItem>
          </Grid>
          <Grid item sm={3} md={2}>
            <ListItem> ORIGINAL MATTRESSES</ListItem>
          </Grid>
          <Grid item sm={3} md={2}>
            <ListItem> LIGHTING & ACCENTS </ListItem>
          </Grid>
          <Grid item sm={3} md={2}>
            <ListItem> GET TO KNOW US</ListItem>
          </Grid>
          <Grid item sm={3} md={2}>
            <ListItem className={classes.item}> BOOK A VISIT</ListItem>
          </Grid>
        </Grid>
      </List>

      <div>
        <Typography className={classes.intruduction}>
          Home / Book an Appointment to Visit Our Showroom
        </Typography>
        <Typography className={classes.bookappointment}>
          Book an Appointment to Visit Our Showroom
        </Typography>
      </div>
      <Grid xs={12}>
        <hr className={classes.line} />
      </Grid>
    </div>
  );
};

export default NavBar;
