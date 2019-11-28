import React from 'react';
import GameCard from '../GameCard/GameCard';

import './style.scss';

interface Props {
  games: any[];
}

const GamesList: React.FC<Props> = props => {
  const { games } = props;

  const renderList = games.map((game, index) => <GameCard key={index} game={game} />);

  return (
    <div className="games-list">
      {renderList}
      {renderList}
      {renderList}
      {renderList}
      {renderList}

    </div>
  );
};

export default GamesList;
