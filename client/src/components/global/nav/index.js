import React, {Component} from 'react';
import "./nav.css";
import {Link} from 'react-router-dom';

class Nav extends Component {

    componentDidMount = () => {
        // this.props.getUserData()
    }

    
    render() {
        return(
            <div className='navbar navbar-inverse'>
                <ul className='nav navbar-nav'>
                    <li><Link to='/'><img id='logo' alt='two cents logo' src='https://github.com/rjp11/Two-Cents/blob/master/client/public/twocents.png?raw=true' /></Link> </li>
                    <li><Link to='/profile'>My Pages</Link></li>
                    <li>|</li>
                    <li><Link to='/create/destination'>Add a Trip Destination</Link></li>
                    <li>|</li>
                    <li><Link to='/create/poi'>Add a Point of Interest</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;