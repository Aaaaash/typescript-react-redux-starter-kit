import { fromJS } from 'immutable';
import { Action } from '../../types';

const initialState = fromJS({
  myInfo: {}
});

export default function aboutReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      console.log(action.data);
      return { ...state, myInfo: action.data };
    default:
      return state;
  }
}
