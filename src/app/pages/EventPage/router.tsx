import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EventInfo from './EventInfo/EventInfo';
import UpcomingMatches from './UpcomingMatches/UpcomingMatches';
import News from './News/News';
import PastMatches from './PastMatches/PastMatches';

export default function EventPageRouting() {
  return (
    <Switch>
      <Route component={EventInfo} path="/event/:eventId/info" />
      <Route component={PastMatches} path="/event/:eventId/past" />
      <Route component={UpcomingMatches} path="/event/:eventId/upcoming" />
      <Route component={News} path="/event/:eventId/news" />
      <Redirect exact from="/event/:eventId" to="/event/:eventId/info" />
    </Switch>
  );
}
