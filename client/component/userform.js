import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';

import Navigation from './navigation';
import SectionOne from  './sectionOne';
import SectionTwo from  './sectionTwo';


import * as formInputData from '../actions/formInput-action';
class UserForm extends React.Component{
    constructor(){
        super();
        this.state={
            input_value: [],
        }
    }
    componentDidMount(props){
            this.setState({input_value: this.props.input});
        console.log("Action Payload check", this.props.input);
        
    }
    render(){
        return(
            <div>
            <Navigation />
            { (this.props.in) ?
            <SectionOne /> :
            <SectionTwo /> }
            <h1>jkhk b{this.state.input_value}</h1>
            </div>
        )
    }
}
 
 function mapStateToProps(state) {
    return {
        in: state.RequestData,
    }
}


export default connect(mapStateToProps)(UserForm);