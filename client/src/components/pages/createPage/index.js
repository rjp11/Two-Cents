import React, {Component} from 'react';
// import CreatePageNav from '../../global/createPageNav';
import CreateDestinationForm from '../../global/createDestinationForm';

class CreatePage extends Component {
    render() {
        return(
            <div>
                <h1>Create a page!</h1>
                <CreateDestinationForm 
                    user_id={this.props.user_id}
                    getAllDestinations={this.props.getAllDestinations}
                    allDests={this.props.allDests}
                    destination={this.props.destination}
                    dest_notes={this.props.dest_notes}
                    dest_image_url={this.props.dest_image_url} 
                    handleInputChange={this.props.handleInputChange} 
                    addDestinationHandler={this.props.addDestinationHandler} />
                
            </div>
        )
    }
}

export default CreatePage;