import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FETCH_GAME } from './actionTypes';
import { fetchGameSuccess, fetchGameFailure } from './actions';
import { axiosInstance } from '../../../core/services/ApiService';

const fetchGameEpic = action$ =>
  action$.ofType(FETCH_GAME).pipe(
    switchMap((action: any) => axiosInstance.get(`/games/${action.payload}`).pipe(map(response => response.data))),
    map(fetchGameSuccess),
    catchError(() => of(fetchGameFailure())),
  );

export default [fetchGameEpic];
