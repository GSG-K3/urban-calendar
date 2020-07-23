import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  header: {
    marginTop: theme.spacing(2),
  },

}));

export default useStyles;
