import React, {Component} from 'react';

class CreatePageForm extends Component {
    render() {
        return (
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Destination"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Destination Notes"/>
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

export default CreatePageForm;