import { combineReducers } from 'redux';
import globalReducer from './container/App/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';

const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action: any) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function createReducer(injectedReducers?: any) {
  // debugger;
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...injectedReducers,
  });
}
