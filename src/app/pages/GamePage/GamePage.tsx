import React, { useEffect } from 'react';
import GameInfo from './GameInfo/GameInfo';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

import { fetchGame } from './store/actions';
import DataLoader from 'app/common/DataLoader/DataLoader';
import GameTabs from './GameTabs/GameTabs';
import GamePageRouting from './router';
import GameFilters from './GameFilters/GameFilters';

const GamePage = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const game = useSelector(state => state.gamePage.game);
  const loading = useSelector(state => state.gamePage.loading);

  useEffect(() => {
    dispatch(fetchGame(gameId));
  }, [dispatch, gameId]);

  const renderContent = loading ? (
    <div className="loader-wrapper">
      <DataLoader />
    </div>
  ) : (
    <>
      <GameInfo game={game} />
      <GameTabs />
      <GameFilters />

      <div className="events-wrapper">
        <GamePageRouting />
      </div>
    </>
  );

  return <div className="game-page-wrapper container-fluid">{renderContent}</div>;
};

export default GamePage;
