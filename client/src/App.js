import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layouts/LandingPage';
import Checkout from './components/commonComponents/Tabs'
const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path= "/questions" component={Checkout}/>
      </Switch>
    </Router>
  </Fragment>
);

export default App;
