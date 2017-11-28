import { Dispatch, Reducer, Unsubscribe } from 'redux';

export interface LifeStore<S> {
  injectedReducers?: object;
  dispatch: Dispatch<S>;
  getState(): S;
  replaceReducer(nextReducer: Reducer<S>): void;
  subscribe(listener: () => void): Unsubscribe;
}
