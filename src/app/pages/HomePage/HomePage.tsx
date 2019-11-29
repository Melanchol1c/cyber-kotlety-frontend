import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

import GamesList from './components/GamesList/GamesList';
import { fetchGames, fetchMainSliderSlides } from './store/actions';
import DataLoader from '../../common/DataLoader/DataLoader';
import HottestSlider from '../../common/HottestSlider/HottestSlider';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const games = useSelector(state => state.homePage.games);
  const slides = useSelector(state => state.homePage.slides);
  const loading = useSelector(state => state.homePage.loading);

  useEffect(() => {
    dispatch(fetchMainSliderSlides());
    dispatch(fetchGames());
  }, []);

  const renderGamesList = games.length > 0 && <GamesList games={games} />;

  const renderGamesListWithLoading = loading ? (
    <div className="loader-wrapper">
      <DataLoader />
    </div>
  ) : (
    renderGamesList
  );

  return (
    <div className="content">
      <HottestSlider slides={slides} />
      {renderGamesListWithLoading}
    </div>
  );
};

export default HomePage;
