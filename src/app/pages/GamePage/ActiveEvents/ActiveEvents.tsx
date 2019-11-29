import React from 'react';
import { useSelector } from 'react-redux';

import Events from '../Events/Events';

const ActiveEvents = () => {
  const events = useSelector(state => state.gamePage.game.events.filter(event => event.active));

  return (
    <div>
      <Events data={events} />
    </div>
  );
};

export default ActiveEvents;
