import React, {Component} from 'react';

class LoginForm extends Component {
    render(){
        return(
            <div>
                <form className="login">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
    
                <p>Or sign up <a href="/">here</a></p>
            </div>
        )
    }
}

export default LoginForm;