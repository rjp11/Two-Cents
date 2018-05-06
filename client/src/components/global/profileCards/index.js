import React, {Component} from 'react';
import "./profileCards.css";
import {Route} from 'react-router-dom';


class ProfileCard extends Component {
    clickHandler = () => {
        this.props.setDestination(this.props.destination);
    }

  render() {
      return (
        <div className='col-lg-12'>
        
                <Route render = {({history}) => (
                    <div className="destination card text-center" data-id={ this.props.id }
                        onClick = { () => { history.push(`/destination/${this.props.id}/${this.props.destination}`); this.clickHandler() } }>
                        <div className='card-shade'>
                        </div>
                        <div className="card-text">
                            <p className='card-title-big'>{ this.props.destination.toUpperCase() }</p>
                        </div>
                        <img className='card-image' alt={ this.props.id } src={ this.props.img } />
                    </div>     
                )} />
        </div>
      );
  }
}

export default ProfileCard;