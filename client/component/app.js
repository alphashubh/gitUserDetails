import React from 'react';

import ReactDOM from 'react-dom';
import Input from './input';
import PrintingState from './printingState';
import Gitdata from './gitdata';

export default class App extends React.Component {

    render() {
        return (
            <div >
                <center><h1 className="jumbotron p-3  bg-dark text-white">Git user data</h1></center>
                <Gitdata />
            </div>
        )
    }
}
