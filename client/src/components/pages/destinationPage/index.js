import React, {Component} from 'react';
import POIPanel from '../../global/poiPanel';
import Map from '../../global/map';
import axios from 'axios';


class DestinationPage extends Component {
    state = {
        pois: []
    }
    

    
    componentDidMount (){
        // Retrieve all POIs user has saved for that destination
        
            let userID = this.props.user_id;
            
            let destination = this.props.destination;
          

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
                <div className='row'>
                    <div className='col-lg-6' data-spy="scroll">
                        {this.state.pois.map(poi => (
                            <POIPanel
                                key={poi.id}
                                id={poi.id}
                                poi={poi.poi_name}
                                type={poi.poi_type}
                                url = {poi.poi_image_url}
                                description ={poi.poi_description}
                            />
                        ))}
                    </div>
                    <div className='col-lg-6'>
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DestinationPage;