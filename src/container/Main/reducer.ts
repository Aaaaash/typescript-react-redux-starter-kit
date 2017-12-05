import { fromJS, Map } from 'immutable';

import { Action } from '../../types';

const initialState = fromJS({});

export default function mainReducer(state: Map<{}, {}> = initialState, action: Action) {
  return state;
}
