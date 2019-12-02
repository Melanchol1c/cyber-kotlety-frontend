import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { default as homePage } from '../pages/HomePage/store/reducer';
import { default as gamePage } from '../pages/GamePage/store/reducer';
import { default as eventPage } from '../pages/EventPage/store/reducer';

import homeEpics from '../pages/HomePage/store/epics';
import gameEpics from '../pages/GamePage/store/epics';
import eventEpics from '../pages/EventPage/store/epics';

const rootReducer = combineReducers({ homePage, gamePage, eventPage });

const rootEpic = combineEpics(...homeEpics, ...gameEpics, ...eventEpics);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) || compose;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}
