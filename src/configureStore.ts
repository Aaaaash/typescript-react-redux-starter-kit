import { routerMiddleware }  from 'react-router-redux';
import { History } from 'history';
import { fromJS } from 'immutable';
import {
  applyMiddleware,
  GenericStoreEnhancer,
  compose,
  createStore,
  Middleware,
  MiddlewareAPI,
} from 'redux';
import 'rxjs';
import { createEpicMiddleware, ActionsObservable, Epic } from 'redux-observable';

import createReducer from './reducers';
import { LifeStore, Action } from './types';
import createRootEpics from './epics';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const epics = new BehaviorSubject(createRootEpics());
const rootEpic: Epic<Action, {}, {}> = (action$: ActionsObservable<Action>, store: MiddlewareAPI<LifeStore>) =>
  epics.mergeMap(epic =>
    epic(action$, store, {})
  );
const dependencies = {};
const epicsMiddleware = createEpicMiddleware(rootEpic, { dependencies });

export function injectEpics(key: string, newEpics: Epic<Action, LifeStore>, newDependencies?: {}): void {
  Object.assign(dependencies, newDependencies);

  epics.next(newEpics);
  // newEpics.map((epic: Epic<Action, LifeStore>) => epics.next(epic));
  console.log(`${key} page Epic is loaded!`);
}

export default (initialState = {}, history: History): LifeStore  => {
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

  const store: LifeStore = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhaners)
  );

  store.injectedReducers = {};
  return store;
};
