import { LOGIN } from './actionTypes';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/authService';
import { loginSuccess, loginFailure } from './actions';
import { of } from 'rxjs';

const loginEpic = action$ =>
  action$.ofType(LOGIN).pipe(
    switchMap((action: any) => {
      const { username, password } = action.payload;

      return AuthService.login(username, password);
    }),
    map(loginSuccess),
    catchError(() => of(loginFailure())),
  );

export default [loginEpic];
