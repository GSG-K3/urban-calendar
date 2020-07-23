import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  radio: {
    marginLeft: theme.spacing(2),
  },
  checkBox: {
    marginLeft: theme.spacing(1),
    fontFamily: '"Montserrat",cursive',
    letterSpacing: '0.0075em',
    lineHeight: '1.6',
    fontSize: '0.90rem',
  },
}));
export default useStyles;
