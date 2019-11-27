import { FETCH_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from './actionTypes';

const initialState = {
  games: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAMES:
      return { ...state, games: [], loading: true, error: null };

    case FETCH_GAMES_SUCCESS:
      return { ...state, games: payload, loading: false, error: null };

    case FETCH_GAMES_FAILURE:
      return { ...state, games: [], loading: false, error: true };

    default:
      return state;
  }
};
