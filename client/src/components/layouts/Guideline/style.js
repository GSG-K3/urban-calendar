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
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  header: {
    fontSize: '28px',
    color: '#333333',
    textAlign: 'center',
  },
  description: {
    fontSize: '15px',
    textAlign: 'center',
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
