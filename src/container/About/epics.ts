import { ActionsObservable, Epic } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Action, LifeStore } from '../../types';
import 'rxjs';

import {
  getSuccess,
} from './action';

const pingEpic: Epic<Action, LifeStore> = (action$: ActionsObservable<Action>) =>
  action$.filter((action: Action) => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });

const fetchUserEpic: Epic<Action, LifeStore> = (action$: ActionsObservable<Action>) =>
  action$.ofType('GET_SOME_DATA')
    .mergeMap((action: Action) =>
      ajax.getJSON(`https://api.github.com/users/${action.name}`)
        .map(response => getSuccess(response))
    );

export default [
  pingEpic,
  fetchUserEpic
];
