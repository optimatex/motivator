import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
// import _merge from 'lodash/merge';

import maps from 'map/services/reducer';

const reducers = {
  maps,
};

const rootReducer = combineReducers(reducers);
// Enable Redux Devtools in development env only
const composeEnhancers = true
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
