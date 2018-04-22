import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

    componentDidMount = () => {
        this.props.getUserData
    }

    
    render() {
        return(
            <div className='navbar navbar-inverse'>
                <ul className='nav navbar-nav'>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/userSearch'>User Search</Link></li>
                    <li><Link to='/create/destination'>Create Page</Link></li>
                    {/* <li><Link to='/destination/:id'>Destination Page</Link></li> */}
                    <li><Link to='/profile'>Profile</Link></li>
                    <li onClick={ this.props.logout }><Link to='/'>Log Out</Link></li>
                    <li> Hello, { this.props.user_first_name } </li>
                </ul>
            </div>
        )
    }
}

export default Nav;