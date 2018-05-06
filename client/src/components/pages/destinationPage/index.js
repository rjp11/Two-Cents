import React, {Component} from 'react';
import POIPanel from '../../global/poiPanel';
// import MyMapComponent from '../../global/map';
import axios from 'axios';


class DestinationPage extends Component {
    state = {
        pois: [],
        coord_lat: 0,
        coord_long: 0,
        zoom: 0
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

        axios.get(`/api/coords/${destination}`).then((res) => {
            this.setState({
                coord_lat: res.data.coord_lat,
                coord_long: res.data.coord_long,
                zoom: res.data.zoom
            })
        });
            
    }
    
    render() {
        return(
            <div className='content'>
                <div className='row'>
                    <div className='col-lg-2 text-center destination-text'>
                        <p>{this.props.destination.toUpperCase()}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'>
                    </div>
                    <div className='col-lg-8' data-spy="scroll">
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
                    {/* <div className='col-lg-5'>
                        <MyMapComponent
                            coord_lat={ this.state.coord_lat }
                            coord_long={this.state.coord_long }
                            zoom={ this.state.zoom }

                        />
                    </div>
                    <div className='col-lg-1'>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default DestinationPage;