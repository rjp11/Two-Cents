import React, {Component} from 'react';
import CreatePageNav from '../../global/createPageNav';
import CreateDestinationForm from '../../global/createDestinationForm';

class CreatePage extends Component {
    render() {
        return(
            <div>
                <h1>Create a page!</h1>
                <CreatePageNav />
                <CreateDestinationForm user_id={this.props.user_id}
                    getAllDestinations={this.props.getAllDestinations}
                    allDests={this.props.allDests} />
                
            </div>
        )
    }
}

export default CreatePage;