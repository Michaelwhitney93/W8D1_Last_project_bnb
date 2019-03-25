import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchBenches} from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
                },
            session: {currentUserId: window.currentUser.id}
            };
        store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TEST!
    window.store = store;
    window.fetchBenches = fetchBenches;
    //TESTED!!

    ReactDOM.render(<Root store={store}/>, root);
});