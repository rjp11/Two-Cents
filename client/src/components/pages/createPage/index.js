import React, {Component} from 'react';
import CreatePageNav from '../../global/createPageNav';
import CreateDestinationForm from '../../global/createDestinationForm';

class CreatePage extends Component {
    render() {
        return(
            <div>
                <h1>Create a page!</h1>
                <CreatePageNav />
                <CreateDestinationForm />
                
            </div>
        )
    }
}

export default CreatePage;