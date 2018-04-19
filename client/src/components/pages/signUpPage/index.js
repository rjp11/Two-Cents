import React, {Component} from 'react';
import SignUpForm from '../../global/signUpForm';

class SignUpPage extends Component {
    render() {
        return(
            <div>
                <SignUpForm/>
                <script type="text/javascript" src="../../../../public/js/signup.js"></script>
            </div>
        )
    }
}

export default SignUpPage;