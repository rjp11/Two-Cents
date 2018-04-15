import React, {Component} from 'react';
import CreatePageNav from '../../global/createPageNav';
import CreatePOIForm from '../../global/createPOIForm';

class CreatePOI extends Component {
    render() {
        return(
            <div>
                <h1>Create a page!</h1>
                <CreatePageNav />
                <CreatePOIForm />
                
            </div>
        )
    }
}

export default CreatePOI;