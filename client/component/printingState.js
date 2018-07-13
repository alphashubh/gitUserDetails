import React from 'react';
import { connect } from 'react-redux';

import Navigation from './navigation';

class PrintingState extends React.Component {
    showInput() {
        if (!this.props.name.name && !this.props.name.password) {
            return <h2></h2>
        }
        else {
            return <div>
                <div><h2>Details</h2>
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td><h4>Name</h4></td>
                                <td> <h4>{this.props.name.name}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>UserName</h4></td>
                                <td> <h4>{this.props.name.password}</h4></td>
                            </tr>
                        </tbody>
                    </table></div>

            </div>
        }
    }
    render() {
        return (
            <div><center>
                <Navigation />
                <div className="col-md-4 ">
                    {this.showInput()}
                </div>
            </center></div>
        )
    }


}
function mapStateToProps(state) {
    return {
        name: state.InputReducer
    }
}

export default connect(mapStateToProps)(PrintingState);