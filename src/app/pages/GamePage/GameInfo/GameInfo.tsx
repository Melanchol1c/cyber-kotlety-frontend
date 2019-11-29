import React from 'react';
import { Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

interface Props {
  game: any;
}

const GameInfo: React.FC<Props> = props => {
  const { cover, name, followers, categories, description, events } = props.game;

  const renderCategories =
    categories &&
    categories.map(category => (
      <div key={category.id} className="badge">
        {category.name}
      </div>
    ));

  return (
    <div className="info-wrapper">
      <div className="cover">
        <img src={cover} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <div className="meta-info">
          <div className="followers-info">
            Followers: <div className="followers-count">{followers}</div>
          </div>
          <div className="dot">•</div> {renderCategories}
        </div>
        <div className="meta-info">
          <div className="followers-info">
            Events: <div className="followers-count">{events ? events.length : 0}</div>
          </div>
        </div>
        <p>{description}</p>
        <Button className="follow-button full-btn">
          <FontAwesomeIcon icon={faHeart} className="follow-icon" />
          Follow
        </Button>
      </div>
    </div>
  );
};

export default GameInfo;
