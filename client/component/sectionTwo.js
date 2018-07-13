import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

import * as formInputData from '../actions/formInput-action';

class SectionTwo extends React.Component {
      updateState =(event)=> {
        
           console.log("***********000", this.props.name);
             event.preventDefault();
        var input = { productType: this.type.value, productDescription: this.description.value };
        this.props.action.formInputData(input);
      
      
    }
    render() {
         
        return (
            <div className="row">

                <div className="jumbotron col-md-4 offset-md-4 ">
                    <center>
                        <h2>UserForm</h2>
                        <div onSubmit={this.updateState.bind(this)} >
                            <input type="text"
                                placeholder="Product Type" ref={(type) => { this.type = type } }
                                className="form-group form-control"
                                maxLength="10"
                                />

                            <br />
                            <input type="text"
                                placeholder="Product Error Description" ref={(description) => { this.description = description } }
                                className="form-group form-control "
                                />

                            <br />
                            <button onClick={this.updateState.bind(this)} className="btn btn-primary ">Share</button>
                        </div>
                    </center>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(formInputData, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);