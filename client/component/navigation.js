import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class Navigation extends React.Component{
   showNavigation(){
       if(this.props.name.name=="admin"){
           return (<li><Link to='/requestPage' className="btn btn-dark"><i class="fa fa-list-alt" aria-hidden="true"></i> View Request</Link></li>
        
           );
       }
       else{
          return (<li><Link to='/userform' className="btn btn-dark"><i class="fa fa-list-alt" aria-hidden="true"></i> Request Form</Link></li>
        );
       }
   }
    render(props){

    return(
        <div className="row bg-dark">
        <div className=" breadcrumb  bg-dark text-white col-md-5 offset-md-7">
        <li><Link to='/timeline' className="btn btn-dark"><i class="fa fa-user-circle-o" aria-hidden="true"></i> {this.props.name.name}'s Timeline</Link></li>
            <li><Link to='/details' className="btn btn-dark"><i class="fa fa-list-alt" aria-hidden="true"></i> Details</Link></li>
         {this.showNavigation()}
        <li ><Link to='/' className="btn btn-dark"><i class="fa fa-power-off" aria-hidden="true" ></i> Logout</Link></li>
               
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

export default connect(mapStateToProps)(Navigation);