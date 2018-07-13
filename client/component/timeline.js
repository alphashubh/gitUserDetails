import React from 'react';
import { connect } from 'react-redux';

import Navigation from './navigation';

class Timeline extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="row">
                    <div className="col-md-4 ">
                        <center>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHf6ogpvfomXZmGW3YMd5a7I7EeQ8-QIgOQ_LFYk8pai7mXzP" />
                            <h2>Welcome {this.props.name.name}</h2>
                        </center>
                    </div>
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

export default connect(mapStateToProps)(Timeline);