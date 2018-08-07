import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddlewares = composeEnhancers(
  applyMiddleware(promiseMiddleware, reduxThunk, logger),
)(createStore);

export default createStoreWithMiddlewares(reducers);
