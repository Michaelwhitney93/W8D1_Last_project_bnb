import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
});

const mdp = (dispatch) => ({
    logOut: () => dispatch(logOut()),
});

export default connect(msp, mdp)(Greeting);