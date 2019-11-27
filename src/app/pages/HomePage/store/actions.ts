import { FETCH_GAMES, FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS } from './actionTypes';

export const fetchGames = () => ({ type: FETCH_GAMES });

export const fetchGamesSuccess = games => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGamesFailure = () => ({
  type: FETCH_GAMES_FAILURE,
  payload: true,
});
