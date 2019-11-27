import React from 'react';
import { Card } from 'react-bootstrap';

import './style.scss';

interface Props {
  game: any;
}

const GameCard: React.FC<Props> = props => {
  const { name, followers, categories, cover } = props.game;

  const renderCategories = categories.map(category => (
    <div key={category.id} className="badge">
      {category.name}
    </div>
  ));

  return (
    <Card className="game-card">
      <Card.Img variant="top" src={cover} />
      <Card.Body className="game-card-body">
        <Card.Title className="title">{name}</Card.Title>
        <Card.Text className="text">
          {followers} followers
          <div className="categories">{renderCategories}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
