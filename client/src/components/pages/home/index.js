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
                        <h1 className='handwritten'>Two Cents Travel <span><img className='logo' src='https://github.com/rjp11/Two-Cents/blob/master/client/public/twocents.png?raw=true'/></span></h1>
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        {/* <img alt="News stand in Catania, Sicily" src='https://github.com/rjp11/Two-Cents/blob/master/client/public/mallorca.jpg?raw=true' /> */}
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