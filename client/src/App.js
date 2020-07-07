import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/commonComponents/NavBar';

const App = () => (
  <Fragment>
    <Router>
      <NavBar />
      <Switch></Switch>
    </Router>
  </Fragment>
);

export default App;
