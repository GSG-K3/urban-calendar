import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    marginLeft: 80,
    fontSize: 19,
    width: '70%',
    textAlign: 'justify',

    [theme.breakpoints.down(950)]: { fontSize: 15, marginLeft: 0 },
  },
  landingContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 20,
    [theme.breakpoints.down(950)]: { alignItems: 'center', marginTop: 10 },
  },
  link: {
    color: '#90B27A',
  },
  landingContainer: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up(950)]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
  landingImg: {
    width: '70%',

    [theme.breakpoints.up(950)]: {
      marginRight: '60px',
      width: '40%',
    },
  },
  bookappointment: {
    marginTop: '20px',
    alignSelf: 'center',
    marginLeft: 80,

    [theme.breakpoints.down(950)]: { marginLeft: 0 },
  },
  footer: {
    width: '100%',
  },
}));

export default useStyles;
