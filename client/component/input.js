import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

import * as userLoginAuthentication from '../actions/input-action';

class Input extends React.Component {
    constructor() {
        super();
        var error;
        this.state={
        name: "", 
        password: ""
        }
    }
    updateState =(event)=> {
        if(this.iname.value && this.password.value && !this.state.name && !this.state.password){
           console.log("***********000", this.props.name);
             event.preventDefault();
        var input = { name: this.iname.value, password: this.password.value };
        this.props.action.userLoginAuthentication(input);
       
        }
       else {
         
         event.preventDefault();
           this.checkName();
           this.checkUserName();
       }
    }
    checkName=() => {
        console.log("00000000000000", this.iname.value);
        if(!this.iname.value){
            this.setState({name : "* Name is Required"});
        }
        else if(!/^[a-zA-Z]*$/g.test(this.iname.value)){
             this.setState({name : "* Enter Only Alphabets"});
        }
        else {
            this.setState({name : ""});
        }
        
    }

    checkUserName= () => {
        if(!this.password.value){
            this.setState({password : "* Password is Required"});
        }
        else {
            this.setState({password : ""});
        }
    }
    authError(){
        if(this.props.name.error){
            return <span>Invalid Username And Password</span>
        }
        else{
            return <span>{}</span>
        }
    }
    render() {
        return (
            <div className="row">
           
                <div className="jumbotron col-md-4 offset-md-4 ">
                    <center>
                     <div className="text-danger">{this.authError()}</div>
                        <form onSubmit={this.updateState.bind(this)} >

                            
                            <input type="text"
                                placeholder="Username" ref={(iname) => { this.iname = iname } }
                                className="form-group form-control" 
                                maxLength="10"
                                onChange={this.checkName}
                                />
                            <span className="text-danger float-left">{this.state.name}</span>
                            <br />
                            <input type="password"
                                placeholder="Password" ref={(password) => { this.password = password } }
                                className="form-group form-control "
                               onChange={this.checkUserName}
                                />
                                 <span className="text-danger float-left">{this.state.password}</span>
                            <br />
                            <button className="btn btn-primary ">Login</button>
                        </form>
                    </center>
                </div>
               
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.InputReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userLoginAuthentication, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);