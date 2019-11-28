import React from 'react';

import './style.scss';

interface Props {
  game: any;
}

const GameInfo: React.FC<Props> = props => {
  const { cover, name, followers, categories, events } = props.game;

  return (
    <div>
      <div className="cover">
        <img src={cover} alt={name} />
      </div>
    </div>
  );
};

export default GameInfo;
