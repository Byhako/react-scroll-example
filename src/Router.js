import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Details from './Details';

const RouterApp = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:id" component={Details} />
    </Switch>
  </Router>
);

export default RouterApp;
