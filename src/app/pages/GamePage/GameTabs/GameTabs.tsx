import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import './style.scss';

const GameTabs = () => {
  return (
    <div className="game-tabs">
      <Nav className="mr-auto menu">
        <NavLink exact activeClassName="tab_active" className="tab" to="active">
          Active Events
        </NavLink>
        <NavLink activeClassName="tab_active" className="tab" to="future">
          Future Events
        </NavLink>
        <NavLink activeClassName="tab_active" className="tab" to="past">
          Past Events
        </NavLink>
      </Nav>
    </div>
  );
};

export default GameTabs;
