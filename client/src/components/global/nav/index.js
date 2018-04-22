import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
    state = {
        user_id: 1
    }

    componentDidMount = () => {
        let userID = this.state.user_id;
        axios.get('api/user_data').then((res) => {
            console.log(res);
            
            this.setState({
                user_id: res.data.id
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
                    <li> { this.state.user_id } </li>

                </ul>
            </div>
        )
    }
}

export default Nav;