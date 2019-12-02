import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './actionTypes';

const initialState = {
  user: null,
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, loading: true, error: null, user: null };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, user: payload };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: true, user: null };

    case LOGOUT:
      return { ...state, loading: false, error: false, user: null };

    case REGISTER:
      return { ...state, loading: true, error: false, user: null };

    case REGISTER_SUCCESS:
      return { ...state, loading: false, error: false, user: payload };

    case REGISTER_FAILURE:
      return { ...state, loading: false, error: true, user: null };

    default:
      return state;
  }
};
