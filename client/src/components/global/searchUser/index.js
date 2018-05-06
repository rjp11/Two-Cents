import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

class SearchUser extends Component {
    state = {
        search_name: "",
        user_search: []
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }

    clickHandler = () => {
        this.props.searchUser();
        //  CHECK THIS ONE OUT \/
        this.props.setSearchName(this.state.search_name);
    }
    
    render() {
        return(
            <div className='col-lg-5'>
                <div className='form-panel'>
                    <h1 className='sans-serif text-center'>Search for a User!</h1>
                    <Route render = {({history}) => (
                        <form>
                            <div className="form-group">
                                <input type='text' 
                                    className='form-control' 
                                    name='search_name'
                                    value={this.state.search_user} 
                                    onChange={this.handleInputChange}
                                />
                                <button type="submit" 
                                    className="btn btn-default"
                                    onClick={ () => { history.push(`/userSearch`);  
                                    this.clickHandler() } }
                                    >Search
                                </button>
                            </div>
                        </form>)
                    } />
                        
                </div>
            </div>
        )
    }
}

export default SearchUser;