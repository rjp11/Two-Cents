import React, {Component} from 'react';
// import CreatePageNav from '../../global/createPageNav';
import CreatePOIForm from '../../global/createPOIForm';

class CreatePOI extends Component {
    render() {
        return(
            <div className='content background-market'>
                <div className='row'>
                    <div className='col-lg-3'>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-panel text-center'>
                            <h1 className='form-title sans-serif text-center'>Share One of Your Favorite Spots</h1>
                            <CreatePOIForm 
                                user_id={ this.props.user_id }
                                destination= { this.props.destination }
                                poi_type= { this.props.poi_type }
                                poi_name = { this.props.poi_name }
                                poi_address = { this.props.poi_address }
                                poi_description = { this.props.poi_description }
                                poi_image_url = { this.props.poi_image_url }
                                getUserDestinations={ this.props.getUserDestinations }
                                handleInputChage= { this.props.handleInputChange }
                                addPOIHandler = { this.props.addPOIHandler } 
                                user_destinations = { this.props.user_destinations }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePOI;