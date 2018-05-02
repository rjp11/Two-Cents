import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

class SearchUser extends Component {
    state = {
        users : [],
        search_user: ""
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }

    searchUser = () => {
        const search = this.state.search_user;

        axios.get(`/api/userSearch/${search}`).then((res) => {
            this.setState({
                users: res.data
            })
        });
    };
    
    render() {
        return(
            <div className='col-lg-5'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        Search for a User!
                    </div>
                    <div className='panel-body'>
                        <div className='form-group'>
                            <input type='text' 
                                className='form-control' 
                                name='search_user'
                                value={this.state.search_user} 
                                onChange={this.handleInputChange}/>
                            <button type="submit" 
                                className="btn btn-default"
                                onClick={this.searchUser}
                                >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchUser;