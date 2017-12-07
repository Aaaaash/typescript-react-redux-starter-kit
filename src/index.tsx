import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { History } from 'history';

import App from './container/App';
import './index.css';
import createStore from './createStore';
import createReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import { LifeStore } from './types/';

const history: History = createHistory();
const initialState: object = {};

const store: LifeStore = createStore(initialState, history);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(createReducer(store.injectedReducers));
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
