import React from 'react';
import { useSelector } from 'react-redux';

import Events from '../Events/Events';

const PastEvents: React.FC = () => {
  const events = useSelector(state => state.gamePage.game.events.filter(event => event));

  return (
    <div>
      <Events data={events} />
    </div>
  );
};

export default PastEvents;
