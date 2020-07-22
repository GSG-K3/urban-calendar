import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    error404: {
    width: '90%',
    marginTop:'0px',
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
        width: 'none',
    },
  },
}));

export default useStyles;
