import { fromJS } from 'immutable';

import { Action } from '../../types';

const initialState = fromJS({});

export default function mainReducer(state = initialState, action: Action) {
  return state;
}

