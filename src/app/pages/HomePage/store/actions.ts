import {
  FETCH_GAMES,
  FETCH_GAMES_FAILURE,
  FETCH_GAMES_SUCCESS,
  FETCH_SLIDES,
  FETCH_SLIDES_SUCCESS,
  FETCH_SLIDES_FAILURE,
} from './actionTypes';

export const fetchGames = () => ({ type: FETCH_GAMES });

export const fetchGamesSuccess = games => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGamesFailure = () => ({
  type: FETCH_GAMES_FAILURE,
});

export const fetchMainSliderSlides = () => ({
  type: FETCH_SLIDES,
});

export const fetchMainSliderSlidesSuccess = slides => ({
  type: FETCH_SLIDES_SUCCESS,
  payload: slides,
});

export const fetchMainSliderSlidesFailure = () => ({
  type: FETCH_SLIDES_FAILURE,
});
