import React, {Component} from 'react';
import DestinationWrapper from '../../global/profileWrapper';
import POIPanel from '../../global/poiPanel';
import MapPanel from '../../global/mapPanel';
import axios from 'axios';

class DestinationPage extends Component {
    state = {
        user_id: 1,
        pois : [],
    }
    
    componentDidMount = () => {
        let userID = this.state.user_id;
        let destination = 'Chicago';

        axios.get(`/api/poi/${userID}/${destination}`).then((res) => {
            this.setState({
                pois: res.data
            })
        });
    }
    
    render() {
        return(
            <div>
                <h1>Destination page!</h1>
                <DestinationWrapper>
                    {this.state.pois.map(poi => (
                        <POIPanel
                            key={poi.id}
                            id={poi.id}
                            poi={poi.poi_name}
                            type={poi.poi_type}
                            description ={poi.poi_description}
                        />
                    ))}
                </DestinationWrapper>
            </div>
        )
    }
}

export default DestinationPage;