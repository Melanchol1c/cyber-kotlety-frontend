import React, { useEffect } from 'react';
import GameInfo from './GameInfo/GameInfo';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGame } from './store/actions';

const GamePage = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const game = useSelector(state => state.gamePage.game);

  useEffect(() => {
    dispatch(fetchGame(gameId));
  }, [dispatch, gameId]);

  return (
    <>
      <GameInfo game={game} />
    </>
  );
};

export default GamePage;
