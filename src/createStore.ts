import { routerMiddleware }  from 'react-router-redux';
import { History } from 'history';
import {
  applyMiddleware,
  Middleware,
  GenericStoreEnhancer,
  compose,
  createStore,
} from 'redux';

import createReducer from './reducers';
import { LifeStore } from './types';

export default (initialState = {}, history: History): LifeStore<object>  => {
  const middlewares: Middleware[] = [
    routerMiddleware(history),
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
