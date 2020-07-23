import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90B27A',
      dark: '#5E8554',
      contrastText: '#fff',
    },
    secondary: {
      main: '#333333',
    },
  },
  typography: {
    fontFamily: '"Montserrat",cursive',
    letterSpacing: '0.0075em',
    lineHeight: '1.6',

    h5: {
      fontSize: '1.30rem',
    },
    body1: {
      fontSize: '0.9rem',
    },
    h6: {
      fontSize: '1.19rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '1.15rem',
      fontWeight: 400,
    },
  },
});

export default responsiveFontSizes(theme);
