import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FETCH_GAMES, FETCH_SLIDES } from './actionTypes';
import { fetchGamesSuccess, fetchGamesFailure, fetchMainSliderSlidesSuccess } from './actions';
import { axiosInstance } from '../../../core/services/ApiService';

const fetchGamesEpic = action$ =>
  action$.ofType(FETCH_GAMES).pipe(
    switchMap(() => axiosInstance.get('/games').pipe(map(response => response.data))),
    map(fetchGamesSuccess),
    catchError(() => of(fetchGamesFailure())),
  );

const fetchSlidesEpic = action$ =>
  action$.ofType(FETCH_SLIDES).pipe(
    switchMap(() => axiosInstance.get('/slides').pipe(map(response => response.data))),
    map(fetchMainSliderSlidesSuccess),
    catchError(() => of(fetchGamesFailure())),
  );

export default [fetchGamesEpic, fetchSlidesEpic];
