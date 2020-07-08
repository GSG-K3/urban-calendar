import React, { useState, useRef } from 'react';
import {
  List,
  ListItem,
  Typography,
  Box,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Divider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from '../../../assests/logo.svg';
import blog from '../../../assests/downearthblog.webp';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './style.js';

const getTabs = () => [
  'COLLECTIONS',
  'FURNITURE',
  'ORIGINAL MATTRESSES',
  'LIGHTING & ACCENTS',
  'GET TO KNOW US',
  'BOOK A VISIT',
];

const NavBar = () => {
  const classes = useStyles();
  const tabs = getTabs();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" className={classes.header}>
        Our Showroom is Open! (By Appointment Only)
      </Typography>

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
            <Typography variant="subtitle1">Search</Typography>
          </Box>
          <Box p={1} display="flex">
            <ShoppingCartOutlinedIcon />
            <Typography variant="subtitle1">0 items</Typography>
          </Box>
        </Box>
      </Box>

      <Link to={'/'} className={classes.homeLink}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={logo} className={classes.logoImg} alt="logo" />
          <Typography color="secondary" variant="h4">
            urban natural home
          </Typography>
        </Box>
      </Link>

      <Box
        display="flex"
        justifyContent="space-around"
        className={classes.icons}
      >
        <MenuIcon
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className={classes.menuList}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    {tabs.map((tab) =>
                      tab === 'BOOK A VISIT' ? (
                        <MenuItem
                          onClick={handleClose}
                          className={classes.bookTab}
                          key={uuidv4()}
                        >
                          <Link to={'/guideline'} className={classes.bookTab}>
                            {tab}
                          </Link>
                        </MenuItem>
                      ) : (
                        <MenuItem onClick={handleClose} key={uuidv4()}>
                          {tab}
                        </MenuItem>
                      ),
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <ShoppingCartOutlinedIcon />
        <SearchIcon />
      </Box>
      <List className={classes.list}>
        <Box
          display="flex"
          justifyContent="center"
          width={1}
          alignItems="center"
        >
          {tabs.map((tab) =>
            tab === 'BOOK A VISIT' ? (
              <ListItem key={uuidv4()}>
                <Link to={'/guideline'} className={classes.bookTab}>
                  {tab}
                </Link>
              </ListItem>
            ) : (
              <ListItem key={uuidv4()}>{tab}</ListItem>
            ),
          )}
        </Box>
      </List>
      <Typography variant="caption" className={classes.pagePath}>
        Home / Book an Appointment to Visit Our Showroom
      </Typography>
      <Typography variant="h4" className={classes.description}>
        Book an Appointment to Visit Our Showroom
      </Typography>

      <Divider variant="middle" />
    </div>
  );
};

export default NavBar;
