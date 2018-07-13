import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

import Navigation from './navigation';
import * as RequestPageData from '../actions/requestPage-action';
class RequestPage extends React.Component{
  
    componentDidMount(){
        this.props.action.RequestPageData();
    }
    render(props){
   
        return(
            <div>
            <Navigation />
            <center>
           {this.props.action.RequestPageData()}
            <div>
                <h2>Error Request</h2>
                <h5>Product Type : {this.props.name.ProductType} </h5>
                <h5>Product Error Description : {this.props.name.ProductDescription} </h5>
                </div>
                </center>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.RequestData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(RequestPageData, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);