import { fromJS, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from './container/App/reducer';
import { Action } from './types';

const routeInitialState = fromJS({
  location: null,
});

function routeReducer(state: Map<{}, {}> = routeInitialState, action: Action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function createReducer(injectedReducers?: any) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...injectedReducers,
  });
}
