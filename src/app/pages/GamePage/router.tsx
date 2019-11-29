import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ActiveEvents from './ActiveEvents/ActiveEvents';
import PastEvents from './PastEvents/PastEvents';
import FutureEvents from './FutureEvents/FutureEvents';

export default function GamePageRouting() {
  return (
    <Switch>
      <Route component={ActiveEvents} path="/game/:gameId/active" />
      <Route component={PastEvents} path="/game/:gameId/past" />
      <Route component={FutureEvents} path="/game/:gameId/future" />
      <Redirect exact from="/game/:gameId" to="/game/:gameId/active" />
    </Switch>
  );
}
