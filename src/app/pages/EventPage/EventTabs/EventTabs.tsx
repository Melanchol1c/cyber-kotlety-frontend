import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const EventTabs = () => {
  return (
    <div className="event-tabs">
      <NavLink activeClassName="tab_active" className="tab" to="info">
        Information
      </NavLink>
      <NavLink activeClassName="tab_active" className="tab" to="upcoming">
        Upcoming Matches
      </NavLink>
      <NavLink activeClassName="tab_active" className="tab" to="past">
        Past Matches
      </NavLink>
      <NavLink activeClassName="tab_active" className="tab" to="news">
        News
      </NavLink>
    </div>
  );
};

export default EventTabs;
