import { createMuiTheme } from '@material-ui/core/styles';

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
    fontFamily: 'Montserrat',
    h6: {
      fontSize: 16,
    },
    h4: {
      fontSize: 20,
      '@media (min-width:970px)': {
        fontSize: 30,
      },
    },
  },
});

export default theme;
