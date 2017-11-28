import { combineEpics } from 'redux-observable';
import { isArray } from 'lodash';

export default function createRootEpics(injectedEpics?: any): any {
  if(!isArray) throw new Error('injectedEpics must be a array');

  return combineEpics(...injectedEpics);
}
