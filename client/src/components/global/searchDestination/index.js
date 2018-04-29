import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class SearchDestination extends Component {
    render() {
        return(
            <div className='col-lg-5'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        Search for a Destination!
                    </div>
                    <div className='panel-body'>
                        <form>
                            <input type='text' className='form-control' id='search-destination'/>
                            <button type="submit" className="btn btn-default">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchDestination;