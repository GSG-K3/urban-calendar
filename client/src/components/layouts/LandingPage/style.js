import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    width: '80%',
    fontFamily: 'Quicksand',
    fontSize: '15px',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      fontSize: '20px',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '15px',
    [theme.breakpoints.up(950 + theme.spacing(2) * 2)]: {
      marginLeft: '1rem',
      marginRight: '7rem',
      marginBottom: '5rem',
      marginTop: '1rem',
    },
  },
  link: {
    color: '#90B27A',
  },
  landing: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up(950 + theme.spacing(2) * 2)]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  image: {
    width: '60%',
    marginTop: '10px',
    marginBottom: '20px',
    [theme.breakpoints.up(950 + theme.spacing(2) * 2)]: {
      marginRight: '20px',
      width: '40%',
    },
  },
  bookappointment: {
    marginTop: '20px',
    [theme.breakpoints.up(950 + theme.spacing(2) * 2)]: {
      marginLeft: '2rem',
      marginRight: '20rem',
      marginTop: '30px',
    },
  },
  footer: {
    width: '100%',
  },
}));

export default useStyles;
