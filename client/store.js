import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import allReducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default function configureStore(initialState){
  return createStore(allReducers,initialState,middleware);
}