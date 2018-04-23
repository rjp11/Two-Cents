import React, {Component} from 'react';
import DestinationWrapper from '../../global/profileWrapper';
import POIPanel from '../../global/poiPanel';
import MapWrapper from '../../global/mapWrapper';
import Map from '../../global/map';


class DestinationPage extends Component {

    
    componentDidMount = () => {
        this.props.getUserPOIs()
    }
    
    render() {
        return(
            <div>
                <h1>Destination page!</h1>
                <DestinationWrapper>
                    <div className='col-lg-6' data-spy="scroll">
                        {this.props.pois.map(poi => (
                            <POIPanel
                                key={poi.id}
                                id={poi.id}
                                poi={poi.poi_name}
                                type={poi.poi_type}
                                url = {poi.image_url}
                                description ={poi.poi_description}
                            />
                        ))}
                    </div>
                    <div className='col-lg-6'>
                        <MapWrapper>
                            <Map/>
                        </MapWrapper>
                    </div>
                </DestinationWrapper>
            </div>
        )
    }
}

export default DestinationPage;