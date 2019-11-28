import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './app/pages/HomePage/HomePage';
import FeedPage from './app/pages/FeedPage/FeedPage';
import HotEventsPage from './app/pages/HotEventsPage/HotEventsPage';
import GamePage from './app/pages/GamePage/GamePage';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/feed" component={FeedPage} />
      <Route exact path="/hot-events" component={HotEventsPage} />
      <Route exact path="/game/:gameId" component={GamePage} />
    </Switch>
  );
};

export default AppRouter;
