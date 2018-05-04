import React, {Component} from 'react';
import UserCard from '../../global/userCard';

class UserSearch extends Component {
    render() {
        return(
            <div>
                <h1>Search Results:</h1>
                <div className='row'>
                    {this.props.user_search.map(users => (
                        <UserCard
                            key={users.id}
                            first_name={ users.first_name }
                            last_name={ users.last_name }
                            // img = {destination.image_url}
                            // setDestination = {this.props.setDestination}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default UserSearch;