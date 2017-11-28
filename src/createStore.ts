import { routerMiddleware }  from 'react-router-redux';
import { History } from 'history';
import {
  applyMiddleware,
  Middleware,
  GenericStoreEnhancer,
  compose,
  createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import createReducer from './reducers';
import { LifeStore } from './types';
import createRootEpics from './epics';

export default (initialState = {}, history: History): LifeStore<object>  => {
  const epicsMiddleware = createEpicMiddleware(createRootEpics());
  const middlewares: Middleware[] = [
    routerMiddleware(history),
    epicsMiddleware,
  ];

  const enhaners: GenericStoreEnhancer[] = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers: Function =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

  const store: LifeStore<object> = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhaners)
  );
  return store;
}
