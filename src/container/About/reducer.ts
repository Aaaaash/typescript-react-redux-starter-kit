import { fromJS } from 'immutable';
import { Action } from '../../types';

const initialState = fromJS({
  myInfo: {}
});

export default function aboutReducer(state: Map<{}, {}> = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return state.set('myInfo', fromJS(action.data));
    default:
      return state;
  }
}
