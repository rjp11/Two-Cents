import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SearchUser from '../../global/searchUser';
import SearchDestination from '../../global/searchDestination';
import './home.css'

class Home extends Component {
    render() {
        return(
            <div className="content background-image">
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h1 className='sans-serif title'>Two Cents Travel <span><img className='logo' alt='two cents logo' src='https://github.com/rjp11/Two-Cents/blob/master/client/public/twocents.png?raw=true'/></span></h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <p className='sans-serif sub-title text-center'>Find information for an upcoming trip and share your own two cents with others.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='spacer col-lg-12 hidden-md hidden-sm hidden-xs'>
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-lg-1'></div>
                    <SearchUser 
                        setSearchName = { this.props.setSearchName }
                        searchUser={ this.props.searchUser }
                        user_search={ this.props.user_search }
                    />
                    <SearchDestination 
                        getAllDestinations = { this.props.getAllDestinations }
                        handleInputChange = { this.props.handleInputChange }
                        allDests = { this.props.allDests }
                    />
                </div>
            </div>
        )
    }
}

export default Home;