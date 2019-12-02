import { FETCH_EVENT, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE } from './actionTypes';

const initialState = {
  event: {},
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EVENT:
      return { ...state, event: {}, loading: true };

    case FETCH_EVENT_SUCCESS:
      return { ...state, event: payload, loading: false };

    case FETCH_EVENT_FAILURE:
      return { ...state, event: {}, loading: false };

    default:
      return state;
  }
};
