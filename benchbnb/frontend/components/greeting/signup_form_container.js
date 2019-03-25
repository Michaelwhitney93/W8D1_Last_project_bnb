import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp } from '../../actions/session_actions';

const msp = (state, ownProps) => {

    return ({
        errors: Object.values(state.errors),
        formType: "signup",
    })
}

const mdp = dispatch => ({
    action: (form) => dispatch(signUp(form)),
})

export default connect(msp, mdp)(SessionForm);