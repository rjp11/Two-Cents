import React, {Component} from 'react';

class SignUpForm extends Component {
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup">
                            <div className="form-group">
                                {/* removed for from label ||||| for="exampleInputPassword1" */}
                                <label>First Name</label>
                                <input type="text" className="form-control" id="first-name-input" placeholder="First Name"/>
                            </div>

                            <div className="form-group">
                                {/* removed for from label ||||| for="exampleInputPassword1" */}
                                <label>Last Name</label>
                                <input type="text" className="form-control" id="last-name-input" placeholder="Last Name"/>
                            </div>

                            <div className="form-group">
                                {/* removed for from label ||||| for="exampleInputEmail1" */}
                                <label >Email address</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Email"/>
                            </div>

                            <div className="form-group">
                                {/* removed for from label ||||| for="exampleInputPassword1" */}
                                <label>Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password"/>
                            </div>

                            {/* <div style="display: none" id="alert" className="alert alert-danger" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg"></span>
                            </div> */}
                            
                            <button type="submit" className="btn btn-default">Sign Up</button>
                        </form>
                        <br />
                        <p>Or log in <a href="/login">here</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpForm;