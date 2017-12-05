import { fromJS, Map } from 'immutable';

import { Action } from '../../types';

const initialState = fromJS({});

export default function mainReducer(state: Map<any, any> = initialState, action: Action) {
  return state;
}

