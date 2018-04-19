import React, {Component} from 'react';

class CreateDestinationForm extends Component {
    
    render() {
        return (
                <form>
                    <div className="form-group">
                        <input list='destinations' className="form-control" placeholder="Destination"/>
                        <datalist id='destinations'>

                        </datalist>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Destination Notes"/>
                    </div>


                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
        )
    }
}

export default CreateDestinationForm;