import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#000000',
    color: 'white',
    fontSize: '16px',
    padding: '5px 15px',
    textAlign: 'center',
  },
  logo: {
    fontFamily: 'Quicksand',
    fontSize: '25px',
  },
  logoImg: {
    width: '60px',
    height: '60px',
  },
  blogImg: {
    width: '220px',
  },

  list: {
    fontSize: '12px',
    [theme.breakpoints.up(600)]: {
      marginLeft: '65px',
    },
    [theme.breakpoints.down(970)]: {
      display: 'none',
    },
  },
  subheader: {
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
  item: {
    color: '#90B27B',
    fontWeight: 'bold',
  },
  pagePath: {
    fontFamily: 'Quicksand',
    marginLeft: '20px',
    fontSize: '12px',
    [theme.breakpoints.up(600)]: {
      marginLeft: '80px',
      fontSize: '15px',
      marginTop: '10px',
    },
  },
  description: {
    fontSize: '18px',
    fontFamily: 'Quicksand',
    marginLeft: '20px',
    [theme.breakpoints.up(600)]: {
      fontSize: '28px',
      marginLeft: '80px',
    },
  },

  line: {
    width: '90vw',
  },
}));

export default useStyles;
