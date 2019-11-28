import { FETCH_GAME, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE } from './actionTypes';

const initialState = {
  game: {},
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAME:
      return { ...state, game: {}, loading: true, error: null };

    case FETCH_GAME_SUCCESS:
      return { ...state, game: payload, loading: false, error: null };

    case FETCH_GAME_FAILURE:
      return { ...state, game: {}, loading: false, error: true };

    default:
      return state;
  }
};
