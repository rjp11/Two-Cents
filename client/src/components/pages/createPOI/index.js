import React, {Component} from 'react';
import CreatePageNav from '../../global/createPageNav';
import CreatePOIForm from '../../global/createPOIForm';

class CreatePOI extends Component {
    render() {
        return(
            <div>
                <h1>Create a page!</h1>
                <CreatePageNav />
                <CreatePOIForm 
                    getUserDestinations={this.props.getUserDestinations}
                    addPOIHandler = {this.props.addPOIHandler} 
                />
                
            </div>
        )
    }
}

export default CreatePOI;