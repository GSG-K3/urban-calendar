import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90B27A',
      dark: '#5E8554',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Montserrat",cursive',
    letterSpacing: '0.0075em',
    lineHeight: '1.6',
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.9rem',
    },
    h6: {
      fontSize: '1.19rem',
      fontWeight: 500,
    },
  },
});

export default responsiveFontSizes(theme);
