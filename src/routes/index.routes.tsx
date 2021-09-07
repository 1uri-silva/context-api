import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Home from '../pages/home';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
