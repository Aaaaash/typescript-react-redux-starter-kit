import { Dispatch, Reducer, Unsubscribe, ReducersMapObject, Store } from 'redux';

export interface LifeStore extends Store<{}> {
  injectedReducers?: any;
  // dispatch: Dispatch<S>;
  // getState(): S;
  // replaceReducer(nextReducer: Reducer<S>): void;
  // subscribe(listener: () => void): Unsubscribe;
}

export interface Action {
  type: string;
  [propName: string]: any;
}

export interface InjectReducerParams {
  key: string;
  reducer: (state: any, action: Action) => any;
}

export interface ReduxState {
  route: object;
  global: object;
  [propName: string]: any;
}
