import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import logo from './logo.svg';
// import header from './Header.svg';
import useStyles from './style.js';

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <img src={header} /> */}
      <div className={classes.header}>
        <p>Our Showroom is Open! (By Appointment Only)</p>
      </div>
      <div className={classes.logo}>
        <img src={logo} className={classes.img} />
        urban natural home
      </div>
      <List className={classes.list}>
        <ListItem> LIVING SALE</ListItem>
        <ListItem> COLLECTIONS</ListItem>
        <ListItem> FURNITURE</ListItem>
        <ListItem> ORIGINAL MATTRESSES</ListItem>
        <ListItem> LIGHTING & ACCENTS </ListItem>
        <ListItem> GET TO KNOW US</ListItem>
        <ListItem className={classes.item}> BOOK A VISIT</ListItem>
      </List>
    </div>
  );
};

export default NavBar;
