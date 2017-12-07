import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import { Reducer } from 'redux';
import createReducer from '../reducers';
import { LifeStore } from '../types';

export function injectReducerFactory(store: LifeStore) {
  return function injectReducer(key: string, reducer: Reducer<object>) {
    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function'
    );
    if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store: LifeStore) {
  return {
    injectReducer: injectReducerFactory(store),
  };
}
