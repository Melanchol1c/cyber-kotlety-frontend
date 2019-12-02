import { FETCH_EVENT, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE } from './actionTypes';

export const fetchEvent = id => ({ type: FETCH_EVENT, payload: id });

export const fetchEventSuccess = event => ({ type: FETCH_EVENT_SUCCESS, payload: event });

export const fetchEventFailure = () => ({ type: FETCH_EVENT_FAILURE });
