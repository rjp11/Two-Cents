import React, {Component} from 'react';

class CreateDestinationForm extends Component {
    render() {
        return (
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Destination"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Destination Notes"/>
                    </div>


                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
        )
    }
}

export default CreateDestinationForm;