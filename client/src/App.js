import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layouts/LandingPage';
import Guideline from './components/layouts/Guideline';

const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/guideline" component={Guideline} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
