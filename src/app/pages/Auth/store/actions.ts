import { LOGIN, LOGOUT, REGISTER, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (username, password) => ({ type: LOGIN, payload: { username, password } });

export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });

export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const register = ({ username, password }) => ({ type: REGISTER, payload: { username, password } });

export const logout = () => ({ type: LOGOUT });
