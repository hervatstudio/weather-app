import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counts extends Component {
    state = {  }
    render() {
        return ( 
            <div>
                <h1>{this.props.count}</h1>
            </div>
         );
    };
};

function mapStateToProps(state){
    return {
        count: state.count
    }
}
 
export default connect(mapStateToProps)(Counts);