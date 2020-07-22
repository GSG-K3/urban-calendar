import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Guideline from './components/layouts/Guideline';
import Checkout from './components/commonComponents/TabsCheckout';
import NavBar from './components/commonComponents/NavBar';
import LandingPage from './components/layouts/LandingPage';
import PageNotFound from './components/layouts/PageNotFound'
const App = () => (
  <Fragment>
    <Router>
      <NavBar />
      <Switch>
      <Route exact path="/" component={LandingPage} />
        <Route exact path="/guideline" component={Guideline} />
        <Route exact path="/reservation" component={Checkout} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
