import { routerMiddleware }  from 'react-router-redux';
import { History } from 'history';
import {
  applyMiddleware,
  GenericStoreEnhancer,
  compose,
  createStore,
  Middleware,
} from 'redux';
import 'rxjs';
import { createEpicMiddleware, ActionsObservable, Epic } from 'redux-observable';

import createReducer from './reducers';
import { LifeStore, Action } from './types';
import createRootEpics from './epics';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const epics = new BehaviorSubject(createRootEpics());
const rootEpic: any = (action$: ActionsObservable<Action>, store: LifeStore<object>) =>
  epics.mergeMap(epic =>
    epic(action$, store)
  );
const dependencies = {};
const epicsMiddleware = createEpicMiddleware(rootEpic, { dependencies });

export function injectEpics(key: string, newEpics: Epic<Action, LifeStore<object>>[], newDependencies?: any): void {
  Object.assign(dependencies, newDependencies);

  newEpics.map((epic: Epic<Action, LifeStore<object>>) => epics.next(epic));
  console.log(`${key} page Epic is loaded!`);
}

export default (initialState = {}, history: History): LifeStore<object>  => {
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

  store.injectedReducers = {};
  return store;
}
