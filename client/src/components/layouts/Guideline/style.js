import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navbar:{
width:'100vw'
  },
  header: {
    fontSize: '32px',
    color: '#333333',
  },
  description: {
    fontSize: '16px',
    width: '600px',
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
}));

export default useStyles;
