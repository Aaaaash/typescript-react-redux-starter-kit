import { Dispatch, Reducer, Unsubscribe, ReducersMapObject, Store } from 'redux';
import { RouterState } from 'react-router-redux';

export interface LifeStore extends Store<{}> {
  injectedReducers?: any;
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
  route: RouterState;
  global: object;
  [propName: string]: any;
}

export type State = Map<{}, {}>;
