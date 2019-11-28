import {
  FETCH_GAMES,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  FETCH_SLIDES,
  FETCH_SLIDES_SUCCESS,
  FETCH_SLIDES_FAILURE,
} from './actionTypes';

const initialState = {
  games: [],
  loading: false,
  error: null,
  slides: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAMES:
      return { ...state, games: [], loading: true, error: null };

    case FETCH_GAMES_SUCCESS:
      return { ...state, games: payload, loading: false, error: null };

    case FETCH_GAMES_FAILURE:
      return { ...state, games: [], loading: false, error: true };

    case FETCH_SLIDES:
      return { ...state, slides: [], loading: true, error: false };

    case FETCH_SLIDES_SUCCESS:
      return { ...state, slides: payload, loading: false };

    case FETCH_SLIDES_FAILURE:
      return { ...state, slides: [], loading: false, error: true };

    default:
      return state;
  }
};
