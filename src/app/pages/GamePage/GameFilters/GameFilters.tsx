import React from 'react';
import { Form } from 'react-bootstrap';

import './style.scss';

const GameFilters = () => {
  return (
    <div className="filters-wrapper">
      Sort by:
      <Form.Control as="select" className="select filter-select">
        <option>Date &#8595;</option>
        <option>Date &#8593;</option>
        <option>Popularity &#8595;</option>
        <option>Popularity &#8593;</option>
      </Form.Control>
    </div>
  );
};

export default GameFilters;
