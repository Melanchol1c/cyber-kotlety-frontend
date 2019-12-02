import { of, from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable } from 'redux';

import { User } from 'app/core/models/User';

export const AuthService = {
  login(username: string, password: string) {
    return of({ username });
  },
};
