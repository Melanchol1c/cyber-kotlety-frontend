import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FETCH_GAMES } from './actionTypes';
import { fetchGamesSuccess, fetchGamesFailure } from './actions';
import { axiosInstance } from '../../../core/services/ApiService';

const fetchGamesEpic = action$ =>
  action$.ofType(FETCH_GAMES).pipe(
    switchMap(() => axiosInstance.get('/games').pipe(map(response => response.data))),
    map(fetchGamesSuccess),
    catchError(() => of(fetchGamesFailure())),
  );

export default [fetchGamesEpic];
