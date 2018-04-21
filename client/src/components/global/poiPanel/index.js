import React from 'react';
import "./poiPanel.css";
 
const POIPanel = props => (
   
    <div className="panel panel-default" data-id={ props.id }>
        <div className="panel-heading">
            <h3>{props.type}: { props.poi }</h3>
        </div>
        <div className="panel-body">
            <img alt={props.id} src={props.url} className='POI-PICTURE'/>
                <p>{ props.description } </p>          
        </div>
    </div>

)

export default POIPanel;