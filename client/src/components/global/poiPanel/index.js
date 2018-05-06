import React, {Component} from 'react';
import "./poiPanel.css";
 
class POIPanel extends Component {
    render(){
        return(
            <div className='poi'>
                <div className="card text-center" data-id={ this.props.id }>
                    {/* <div className='card-shade'>
                    </div> */}
                    <div className="card-type">
                        <p className='card-type-text'>{ this.props.type }</p>
                    </div>
                    {/* <div className='card-text'>
                        <p className='card-title-small'>{ this.props.poi.toUpperCase() }</p>
                    </div> */}
                    <img className='card-image' alt={this.props.id} src={this.props.url}/>
                </div>
                <div className='card-description row'>
                    <div className='col-lg-4 text-center'>
                        <p className='poi-name handwritten'>{ this.props.poi.toUpperCase() }</p>
                    </div>
                    <div className='col-lg-8'>
                        <p className='poi-description'>{ this.props.description } </p>         
                    </div> 
                </div>
            </div>
        )
    }
    

}

export default POIPanel;