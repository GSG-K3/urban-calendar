import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  timeslots: { marginTop: 10 },
  calendarContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));
export default useStyles;
