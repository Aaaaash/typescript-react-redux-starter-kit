import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';

import createReducer from '../reducers';

export function injectReducerFactory(store: any) {
  return function injectReducer(key: string, reducer: Function) {
    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function'
    );

    if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store: any) {
  return {
    injectReducer: injectReducerFactory(store),
  };
}
