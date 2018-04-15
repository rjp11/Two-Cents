import React, {Component} from 'react';
import CreatePageForm from '../../global/createPageForm';

class CreatePage extends Component {
    render() {
        return(
            <div>
                <h1>Create a page!</h1>
                <CreatePageForm />
            </div>
        )
    }
}

export default CreatePage;