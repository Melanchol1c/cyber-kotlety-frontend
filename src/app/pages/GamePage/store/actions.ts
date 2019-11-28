import { FETCH_GAME, FETCH_GAME_FAILURE, FETCH_GAME_SUCCESS } from './actionTypes';

export const fetchGame = id => ({ type: FETCH_GAME, payload: id });

export const fetchGameSuccess = game => ({
  type: FETCH_GAME_SUCCESS,
  payload: game,
});

export const fetchGameFailure = () => ({
  type: FETCH_GAME_FAILURE,
});
