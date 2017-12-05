import { fromJS, Map } from 'immutable';

import { Action } from '../../types';

const initialState = fromJS({});

export default function globalReducer(state: Map<{}, {}> = initialState, action: Action) {
  return state;
}
