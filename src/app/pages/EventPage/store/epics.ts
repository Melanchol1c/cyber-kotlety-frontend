import { FETCH_EVENT } from './actionTypes';
import { switchMap, map, catchError } from 'rxjs/operators';
import { fetchEventSuccess, fetchEventFailure } from './actions';
import { of } from 'rxjs';

import { ApiService } from '../services/ApiService';

const fetchEventEpic = action$ =>
  action$.ofType(FETCH_EVENT).pipe(
    switchMap((action: any) => ApiService.getEventById(action.payload).pipe(map(res => res.data))),
    map(fetchEventSuccess),
    catchError(() => of(fetchEventFailure())),
  );

export default [fetchEventEpic];
