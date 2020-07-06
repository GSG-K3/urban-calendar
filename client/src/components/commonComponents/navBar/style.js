import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
  },
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
    marginTop:'15px',
  },
  img: {
    width: '32px',
    height: '32px',
  },

  list: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '12px',
  },
  item: {
    color: '#90B27B',
    fontWeight: 'bold',
  },
}));

export default useStyles;
