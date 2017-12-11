import { ActionsObservable, Epic, combineEpics } from 'redux-observable';
import { Action, LifeStore } from '../../types';
import 'rxjs';

const pingEpic: Epic<Action, LifeStore> = (action$: ActionsObservable<Action>) =>
  action$.filter((action: Action) => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });

export default combineEpics(
  pingEpic
);
