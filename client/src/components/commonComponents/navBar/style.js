import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#000000',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    fontFamily: 'Quicksand',
    fontSize: '25px',
  },
  img: {
    width: '60px',
    height: '60px',
  },

  list: {
    fontSize: '12px',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginLeft: '65px',
    },
  },
  item: {
    color: '#90B27B',
    fontWeight: 'bold',
  },
  intruduction: {
    fontFamily: 'Quicksand',
    marginLeft: '20px',
    fontSize: '12px',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginLeft: '80px',
      fontSize: '15px',
      marginTop: '20px',
    },
  },
  bookappointment: {
    fontSize: '18px',
    fontFamily: 'Quicksand',
    marginLeft: '20px',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      fontSize: '28px',
      marginLeft: '80px',
    },
  },

  line: {
    width: '90vw',
  },
}));

export default useStyles;
