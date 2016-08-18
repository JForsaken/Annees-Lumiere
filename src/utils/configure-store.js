/* eslint-disable global-require */

/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import persistenceStore from '../persistence/store';
import * as reducers from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';
import withScroll from 'scroll-behavior';

const history = withScroll(createHistory(), (prevLocation, location) => (
  // Scroll to top when attempting to vist the current path.
  prevLocation && location.pathname === prevLocation.pathname ? [0, 0] : true
));

const storeEnhancers = [
  persistenceStore,
  reduxReactRouter({ history }),
];

if (__DEVTOOLS__) {
  const DevTools = require('../components/common/DevTools').default;
  storeEnhancers.push(DevTools.instrument());
}

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  ...storeEnhancers
)(createStore);

const combinedReducer = combineReducers(Object.assign({
  router: routerStateReducer,
  form: formReducer,
}, reducers));

export default function configureStore(initialState) {
  const store = finalCreateStore(combinedReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
