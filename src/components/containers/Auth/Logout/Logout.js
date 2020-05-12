//To work with logout link

import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'; // To redirect to main page after logout
import {connect} from 'react-redux';

import * as actions from '../../../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render(){
     return <Redirect to = "/"/>; // here it will redirect to main page, after logout
 }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch (actions.logout())
    };
};

export default  connect (null, mapDispatchToProps)(Logout);