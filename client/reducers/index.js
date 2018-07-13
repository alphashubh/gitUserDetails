import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'

import InputReducer from './reducer-input';
import RequestData from './reducer-requestPage'

const allReducers =combineReducers({
   InputReducer, RequestData , routing:routerReducer
});

export default allReducers;