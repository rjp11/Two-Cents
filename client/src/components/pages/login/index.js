import React, {Component} from 'react';
import LoginForm from '../../global/loginForm';

class LogIn extends Component {
    render() {
        return(
            <div>
                <h1>Log In</h1>
                <LoginForm/>
                <script type="text/javascript" src="../../../../public/js/login.js"></script>
            </div>
        )
    }
}

export default LogIn;