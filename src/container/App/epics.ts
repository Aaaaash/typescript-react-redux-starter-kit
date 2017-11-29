import { ActionsObservable, Epic } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Action, LifeStore } from '../../types';
import 'rxjs';

const pingEpic: Epic<Action, LifeStore<object>> = (action$: ActionsObservable<Action>) =>
  action$.filter((action: Action) => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });

const fetchUserEpic: Epic<Action, LifeStore<object>> = (action$: ActionsObservable<Action>) =>
  action$.ofType('FETCH_USER')
    .mergeMap((action: Action) =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => ({ type: 'FETCH_USER_FULFILLED', response }))
    );

export default [
  pingEpic,
  fetchUserEpic
];
