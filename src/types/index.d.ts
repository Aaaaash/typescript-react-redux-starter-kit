import { Dispatch, Reducer, Unsubscribe } from 'redux';

export interface LifeStore<S> {
  injectedReducers?: any;
  dispatch: Dispatch<S>;
  getState(): S;
  replaceReducer(nextReducer: Reducer<S>): void;
  subscribe(listener: () => void): Unsubscribe;
}

export interface Action {
  type: string;
  [propName: string]: any;
}

export interface InjectedReducerParams {
  key: string;
  reducer: (state: any, action: Action) => any;
}

export interface ReduxState {
  route: object;
  global: object;
  [propName: string]: any;
}
