import React from 'react';
import { Link, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './greeting/login_form_container';
import SignUpFormContainer from './greeting/signup_form_container';
import SearchContainer from './benches/search_container';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <Route exact path="/" component={SearchContainer} />
    </div>
);

export default App;