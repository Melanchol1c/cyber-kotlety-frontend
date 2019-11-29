import React from 'react';
import { Card } from 'react-bootstrap';

const Event = props => {
  const { id, title, isVerified, teamsCount, organizer, prize } = props;

  const renderVerified = isVerified ? (
    <div className="badge badge-success">verified</div>
  ) : (
    <div className="badge">not verified</div>
  );

  return (
    <Card key={id} className="event">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className="event-title">
          {title} {renderVerified}
        </Card.Title>
        <div>
          <p>
            Prize: <b>{prize} ₽</b>
          </p>
          <p>
            Organizer: <b>{organizer}</b>
          </p>
          <p>
            Teams: <b>{teamsCount}</b>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
