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
  pagePath: {
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up(600)]: {
      marginLeft: '80px',
      marginTop: '10px',
      justifyContent: 'flex-start',
    },
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '20px',
    [theme.breakpoints.up(600)]: {
      marginLeft: '80px',
      display: 'flex',
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
  },
}));

export default useStyles;
