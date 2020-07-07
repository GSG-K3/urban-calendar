import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    width: '60%',
    fontFamily: 'Quicksand',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '50px',
  },
  landing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '-80px',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: '-300px',
  },
  footer: {
    width: '100%',
    marginTop: '10px',
  },
  image: {
    marginTop: '10px',
    marginRight: '20px',
  },
}));

export default useStyles;
