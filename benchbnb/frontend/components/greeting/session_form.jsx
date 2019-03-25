import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value,
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.action(user);
    }
    render() {
        const header = this.props.formType === "login" ? "Log In" : "Sign Up";
        const link = header === "Log In" ? "/signup" : "/login";
        const linkTitle = header === "Log In" ? "Sign Up" : "Log In";
        const errors = this.props.errors.map((error) => {
            debugger
            return error.currentErrors;
        })
        const errsArr = errors.flat().map((error, idx) => {
            return <li key={idx}>{error}</li>
        });
        return (
            <div>
                <h2>{header}</h2>
                {errsArr ? errsArr : null}
                <br/>
                <form onSubmit={this.handleSubmit}>
                <label>Username:
                    <input type="text" value={this.state.username} onChange={this.handleChange("username")}/>
                </label>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                </label>
                <input type="submit" value={header}/>
                </form>
                <Link to={link}>{linkTitle}</Link>
            </div>
        )
    }
}

export default SessionForm;