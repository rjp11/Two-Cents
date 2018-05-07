import React, {Component} from 'react';
import CreateDestinationForm from '../../global/createDestinationForm';

class CreatePage extends Component {
    render() {
        return(
            <div className='content background-image'>
                <div className='row'>
                    <div className='col-lg-3'>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-panel text-center'>
                            <h1 className='form-title sans-serif text-center'>Create a Page</h1>
                            <CreateDestinationForm 
                                user_id={this.props.user_id}
                                getAllDestinations={this.props.getAllDestinations}
                                allDests={this.props.allDests}
                                destination={this.props.destination}
                                dest_notes={this.props.dest_notes}
                                dest_image_url={this.props.dest_image_url} 
                                handleInputChange={this.props.handleInputChange} 
                                addDestinationHandler={this.props.addDestinationHandler} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePage;