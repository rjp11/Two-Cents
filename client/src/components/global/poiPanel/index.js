import React from 'react';
 
const POIPanel = props => (
   
                <div className="panel panel-default" data-id={ props.id }>
                    <div className="panel-heading">
                        <h3>{props.type}: { props.poi }</h3>
                    </div>
                    <div className="panel-body">
                        <p>{ props.description } </p>          
                    </div>
                </div>

)

export default POIPanel;