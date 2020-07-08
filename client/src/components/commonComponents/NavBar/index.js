import React from 'react';
import { List, ListItem, Typography, Grid, Box, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from './logo.svg';
import blog from './downearthblog.webp';

import useStyles from './style.js';

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.header}>
            Our Showroom is Open! (By Appointment Only)
          </Typography>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.subheader}
      >
        <Box p={1}>
          <img src={blog} className={classes.blogImg} alt="blog" />
        </Box>
        <Box display="flex" justifyContent="flex-end" m={1} p={1}>
          <Box p={1} display="flex">
            <SearchIcon />
            <Typography>Search</Typography>
          </Box>
          <Box p={1} display="flex">
            <ShoppingCartOutlinedIcon />
            <Typography>0 items</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.logo}
      >
        <img src={logo} className={classes.logoImg} alt="logo" />
        urban natural home
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        className={classes.icons}
      >
        <MenuIcon />
        <ShoppingCartOutlinedIcon />
        <SearchIcon />
      </Box>
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
            <ListItem className={classes.item}>
              <Link href="/reservation">BOOK A VISIT</Link>{' '}
            </ListItem>
          </Grid>
        </Grid>
      </List>

      <div>
        <Typography className={classes.pagePath}>
          Home / Book an Appointment to Visit Our Showroom
        </Typography>
        <Typography className={classes.description}>
          Book an Appointment to Visit Our Showroom
        </Typography>
      </div>
      <Grid item xs={12}>
        <hr className={classes.line} />
      </Grid>
    </div>
  );
};

export default NavBar;
