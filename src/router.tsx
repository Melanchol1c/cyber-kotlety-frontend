import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './app/pages/HomePage/HomePage';
import FeedPage from './app/pages/FeedPage/FeedPage';
import Calendar from './app/pages/Calendar/Calendar';
import GamePage from './app/pages/GamePage/GamePage';
import EventPage from 'app/pages/EventPage/EventPage';
import LoginPage from 'app/pages/Auth/LoginPage/LoginPage';
import RegisterPage from 'app/pages/Auth/RegisterPage/RegisterPage';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/feed" component={FeedPage} />
      <Route exact path="/calendar" component={Calendar} />
      <Route path="/game/:gameId" component={GamePage} />
      <Route path="/event/:eventId" component={EventPage} />
    </Switch>
  );
};

export default AppRouter;
