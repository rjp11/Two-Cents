import React, {Component} from 'react';

class CreatePOIForm extends Component {
    render() {
        return (
                <form>
                    <div class="form-group">
                        <input list="destinations" class="form-control" placeholder="Destination"/>
                        <datalist id="destinations">
                            <option value="Chicago"/>
                            <option value="Mallorca"/>
                            <option value="Sicily"/>
                        </datalist>
                    </div>
                    <div class="form-group">
                        <input list="locationTypes" class="form-control" placeholder="Location Type"/>
                        <datalist id="locationTypes">
                            <option value="Casual Eats" />
                            <option value="Fine Dining" />
                            <option value="Lodging" />
                            <option value="Shopping" />
                        </datalist>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Location Name"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Location Description"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Image Link"/>
                    </div>


                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
        )
    }
}

export default CreatePOIForm;