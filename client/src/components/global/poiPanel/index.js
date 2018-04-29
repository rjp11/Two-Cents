import React, {Component} from 'react';
import "./poiPanel.css";
 
class POIPanel extends Component {
    render(){
        return(
            <div className="panel panel-default" data-id={ this.props.id }>
                <div className="panel-heading">
                    <h3>{ this.props.type.toUpperCase() }: { this.props.poi.toUpperCase() }</h3>
                </div>
                <div className="panel-body">
                    <img alt={this.props.id} src={this.props.url} className='POI-PICTURE'/>
                        <p>{ this.props.description } </p>          
                </div>
            </div>
        )
    }
    

}

export default POIPanel;