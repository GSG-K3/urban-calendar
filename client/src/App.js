import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layouts/LandingPage';
import Checkout from './components/commonComponents/TabsCheckout';
import NavBar from './components/commonComponents/NavBar';

const App = () => (
  <Fragment>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/reservation" component={Checkout} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
