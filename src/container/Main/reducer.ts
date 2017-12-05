import { fromJS, Map } from 'immutable';

import { Action } from '../../types';

const initialState = fromJS({});

export default function mainReducer(state: Map<object, object> = initialState, action: Action) {
  return state;
}

