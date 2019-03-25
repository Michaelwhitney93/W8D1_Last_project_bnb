import { login, logout, signup } from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// Actions
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON,
});

// Thunk action creator
export const signUp = (formUser) => (dispatch) => (
    signup(formUser).then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveSessionErrors(errors)) )
);

export const logIn = (formUser) => (dispatch) => (
    login(formUser).then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveSessionErrors(errors)))
);

export const logOut = () => (dispatch) => (
    logout().then(() => dispatch(logoutCurrentUser()), (errors) => dispatch(receiveSessionErrors(errors)))
);