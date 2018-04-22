import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
    state = {
        user_id: 1,
        user_first_name: ""
    }

    componentDidMount = () => {
        
        axios.get('api/user_data').then((res) => {
            
            this.setState({
                user_id: res.data.id,
                user_first_name: res.data.first_name
            })
        })
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
                    <li> { this.state.user_first_name } </li>

                </ul>
            </div>
        )
    }
}

export default Nav;