import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    state = {  }
    render() { 
        console.log(this.props.users)
        return ( 
            <div>
                <ul>
                    {this.props.users.map(user=>{
                        return (
                            <li key={user.id}>{user.name}</li>
                        );
                    })}
                </ul>
            </div>
         );
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}
 
export default connect(mapStateToProps)(Users);