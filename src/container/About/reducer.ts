import { fromJS } from 'immutable';
import { Reducer } from 'redux';

import { Action, State } from '../../types';

const initialState = fromJS({
  myInfo: {}
});

const reducer: Reducer<State> =
  (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return state.set('myInfo', fromJS(action.data));
    default:
      return state;
  }
}

export default reducer;
