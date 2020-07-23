import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#000000',
    color: 'white',
    padding: '5px 15px',
    textAlign: 'center',
  },
  subheader: {
    [theme.breakpoints.down(970)]: {
      display: 'none',
    },
  },
  blogImg: {
    width: '220px',
    padding: 10,
  },
  homeLink: {
    textDecoration: 'none',
  },
  logoImg: {
    width: '60px',
    height: '60px',
  },
  list: {
    fontSize: 12,
    [theme.breakpoints.up(600)]: {
      marginLeft: '65px',
    },
    [theme.breakpoints.down(970)]: {
      display: 'none',
    },
  },
  icons: {
    display: 'none',
    [theme.breakpoints.down(970)]: {
      display: 'flex',
      margin: '10px 0',
    },
  },
  menuList: {
    width: '100vw',
  },
  bookTab: {
    color: '#90B27B',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 80,
    [theme.breakpoints.down(600)]: { marginLeft: 20 },
  },
  pagePath: {
    [theme.breakpoints.down(600)]: { fontSize: 11 },
  },
  description: {
    fontSize: 25,
    [theme.breakpoints.down(600)]: { fontSize: 15 },
  },
}));

export default useStyles;
