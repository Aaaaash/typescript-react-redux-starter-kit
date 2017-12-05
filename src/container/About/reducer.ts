import { fromJS, Map } from 'immutable';
import { Action } from '../../types';

const initialState: Map<object, object> = fromJS({
  myInfo: {}
});

export default function aboutReducer(state: Map<object, object> = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return { ...state, myInfo: action.data };
    default:
      return state;
  }
}
