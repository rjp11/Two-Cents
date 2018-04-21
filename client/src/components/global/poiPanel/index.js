import React from 'react';
 
const POIPanel = props => (
   
            <div className='col-lg-6'>
                <div className="panel panel-default" data-id={ props.id }>
                    <div className="panel-heading">
                        {props.type}: { props.poi }
                    </div>
                    <div className="panel-body">
                        <h4>{ props.description } </h4>          
                    </div>
                </div>
            </div>

)

export default POIPanel;