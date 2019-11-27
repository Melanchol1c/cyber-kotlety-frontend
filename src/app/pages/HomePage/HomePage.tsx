import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

import GamesList from './components/GamesList/GamesList';
import { fetchGames } from './store/actions';
import DataLoader from '../../common/DataLoader/DataLoader';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const games = useSelector(state => state.homePage.games);
  const loading = useSelector(state => state.homePage.loading);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const renderGamesList = games.length > 0 && <GamesList games={games} />;

  const renderGamesListWithLoading = loading ? <DataLoader /> : renderGamesList;

  return <div className="content">{renderGamesListWithLoading}</div>;
};

export default HomePage;
