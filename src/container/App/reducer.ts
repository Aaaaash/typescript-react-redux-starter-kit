import { fromJS } from 'immutable';
import { Reducer } from 'redux';

import { Action, State } from '../../types';

const initialState = fromJS({});

const reducer: Reducer<State> =
  (state: State = initialState, action: Action) => {
  return state;
}

export default reducer;
