import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  titles: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '28px',
    color: '#333333',
    textAlign: 'center',
    [theme.breakpoints.down(970)]: {
      fontSize: '22px',
    },
  },
  description: {
    fontSize: '15px',
    textAlign: 'center',
    [theme.breakpoints.down(970)]: {
      fontSize: '14px',
      marginTop: 5,
    },
  },
  label: {
    color: 'rgba(0,0,0,0.87)',
  },
  stepIcon: {
    color: '#90B27B',
  },
  button: {
    backgroundColor: '#90B27B',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(144, 178, 123, 0.80)',
    },
  },
  startLink: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default useStyles;
