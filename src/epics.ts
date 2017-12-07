import { combineEpics, Epic } from 'redux-observable';
import appEpics from './container/App/epics';
import { Action, LifeStore } from './types';

export default function createRootEpics(): Epic<Action, LifeStore, object> {
  return combineEpics(...appEpics);
}
