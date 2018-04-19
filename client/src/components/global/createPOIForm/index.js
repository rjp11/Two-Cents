import React, {Component} from 'react';

class CreatePOIForm extends Component {
    render() {
        return (
                <form>
                    <div className="form-group">
                        <input list="destinations" className="form-control" placeholder="Destination"/>
                        <datalist id="destinations">
                            <option value="Chicago"/>
                            <option value="Mallorca"/>
                            <option value="Sicily"/>
                        </datalist>
                    </div>
                    <div className="form-group">
                        <input list="locationTypes" className="form-control" placeholder="Location Type"/>
                        <datalist id="locationTypes">
                            <option value="Casual Eats" />
                            <option value="Fine Dining" />
                            <option value="Lodging" />
                            <option value="Shopping" />
                            <option value="Cultural Experience" />
                        </datalist>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Location Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Location Description"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Image Link"/>
                    </div>


                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
        )
    }
}

export default CreatePOIForm;