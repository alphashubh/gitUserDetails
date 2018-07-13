import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './component/app';
import Input from './component/input';
import PrinitingState from './component/printingState';
import Timeline from './component/timeline';
import configureStore from './store';
import RequestPage from './component/requestPage';
import UserForm from './component/userform';
import Upload from './component/upload';

const store=configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
         <Router history={history}>
            <Route path='/' component={App} />
            <Route path='/index' component={App} />
            <Route path='/timeline' component={Timeline}/>
            <Route path='/details' component={PrinitingState}/>
            <Route path='/requestPage' component={RequestPage}/>
            <Route path='/userform' component={UserForm}/>
            <Route path='/upload' component={Upload}/>
        </Router>
        </Provider>
    , document.getElementById('root'));
