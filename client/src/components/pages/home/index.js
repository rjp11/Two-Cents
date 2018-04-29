import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SearchUser from '../../global/searchUser';
import SearchDestination from '../../global/searchDestination';

class Home extends Component {
    render() {
        return(
            <div>
                <div className='row text-center'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        <img alt="News stand in Catania, Sicily" src='https://farm5.staticflickr.com/4477/37543488160_a487b3f012_b.jpg' />
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-lg-1'></div>
                    <SearchUser />
                    <SearchDestination />
                </div>
            </div>
        )
    }
}

export default Home;