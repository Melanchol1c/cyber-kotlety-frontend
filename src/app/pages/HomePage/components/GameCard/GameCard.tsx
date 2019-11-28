import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';

interface Props {
  game: any;
}

const GameCard: React.FC<Props> = props => {
  const { id, name, followers, categories, cover } = props.game;

  const renderCategories = categories.map(category => (
    <div key={category.id} className="badge">
      {category.name}
    </div>
  ));

  return (
    <Link to={`/game/${id}`}>
      <Card className="game-card">
        <div className="cover-wrapper">
          <div className="angle-top" />
          <div className="angle-bottom" />
          <Card.Img className="cover" variant="top" src={cover} />
        </div>
        <Card.Body className="game-card-body">
          <Card.Title className="title">{name}</Card.Title>
          <Card.Text className="text">
            {followers} followers
            <div className="categories">{renderCategories}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default GameCard;
