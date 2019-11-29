import React from 'react';

import './style.scss';

import Event from './Event';

const Events = props => {
  const { data } = props;

  const renderEvents = data && data.map((event, i) => <Event key={i} {...event} />);

  return (
    <div className="events-wrapper">
      {renderEvents}
      {renderEvents}
      {renderEvents}
      {renderEvents}
      {renderEvents}
      {renderEvents}
      {renderEvents}
      {renderEvents}
    </div>
  );
};

export default Events;
