import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn } from '../../actions/session_actions'
const msp = (state, ownProps) => {

    return ({
        errors: Object.values(state.errors),
        formType: 'login',
    })
}

const mdp = (dispatch) => ({
    action: (form) => dispatch(logIn(form))
})

export default connect(msp, mdp)(SessionForm);