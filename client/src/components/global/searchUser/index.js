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
            <div>
                <div className='hidden-lg col-md-2 col-sm-2 hidden-xs'></div>
                <div className='col-lg-5 col-md-8 col-sm-8'>
                    <div className='form-panel'>
                        <h1 className='form-title sans-serif text-center'>Search for a User!</h1>
                        <Route render = {({history}) => (
                            <form>
                                <div className="form-group">
                                    <input type='text' 
                                        className='form-control' 
                                        name='search_name'
                                        value={this.state.search_user} 
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <button type="submit" 
                                    className="btn btn-default"
                                    onClick={ () => { history.push(`/userSearch`);  
                                    this.clickHandler() } }
                                    >Search
                                </button>
                            </form>)
                        } />   
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchUser;