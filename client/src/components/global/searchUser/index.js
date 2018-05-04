import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

class SearchUser extends Component {
    state = {
        search_name: "",
        user_serch: []
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }
    
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
                                name='search_name'
                                value={this.state.search_user} 
                                onChange={this.handleInputChange}/>
                            <Route render = {({history}) => (
                                <button type="submit" 
                                className="btn btn-default"
                                onClick={ () => {history.push(`/userSearch`);  
                                this.props.searchUser() } }
                                >Search</button>
                            )} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchUser;