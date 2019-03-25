import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    render() {
        const user = this.props.currentUser;

        const display = user ? (
            <div>
                <p>Hello, {user.username} </p>
                <button onClick={this.props.logOut}>Log Out</button>
            </div>
        ) : (
                <div>
                    <Link className="btn" to="/signup">Sign Up</Link>
                    <Link className="btn" to="/login">Log In</Link>
                </div>
        );

        return (
            <div>
                {display}
            </div>
        );

    }
}

export default Greeting;