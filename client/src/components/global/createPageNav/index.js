import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreatePageNav extends Component {
    render(){
        return(
            <div className='navbar navbar-inverse'>
                <ul className='nav navbar-nav'>
                    <li><Link to='/create/destination'>Destination</Link></li>
                    <li><Link to='/create/poi'>Point of Interest</Link> </li>
                </ul>
            </div>
        )
    }
}

export default CreatePageNav;