import React, {Component} from 'react';
import LoginForm from '../../global/loginForm';

class LogIn extends Component {
    render() {
        return(
            <div>
                <h1>Log In</h1>
                <LoginForm/>
            </div>
        )
    }
}

export default LogIn;