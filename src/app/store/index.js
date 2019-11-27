import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { default as homePage } from '../pages/HomePage/store/reducer';
import homeEpics from '../pages/HomePage/store/epics';

const rootReducer = combineReducers({ homePage });

const rootEpic = combineEpics(...homeEpics);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) || compose;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}
