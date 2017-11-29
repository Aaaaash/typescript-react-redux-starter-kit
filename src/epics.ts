import { combineEpics } from 'redux-observable';

import appEpics from './container/App/epics';

export default function createRootEpics(): any {
  return combineEpics(...appEpics);
}
