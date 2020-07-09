import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme/materialUITheme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
