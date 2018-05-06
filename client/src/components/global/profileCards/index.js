import React, {Component} from 'react';
import "./profileCards.css";
import {Route} from 'react-router-dom';


class ProfileCard extends Component {
    clickHandler = () => {
        this.props.setDestination(this.props.destination);
        // this.props.history.push(`/destination/${this.props.id}/${this.props.destination}`);
    }

  render() {
      return (
        <div>

            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <div className="panel panel-default" data-id={ this.props.id }>
                    <div className="panel-heading text-center">
                        <h1>{ this.props.destination.toUpperCase() }</h1>
                    </div>
                    <Route render = {({history}) => (
                        <div className="panel-body"
                            onClick = { () => { history.push(`/destination/${this.props.id}/${this.props.destination}`); this.clickHandler() } }>
                            <img className="card" alt={ this.props.id } src={ this.props.img } />
                        </div>
                    )} />
                    
                </div>
            </div>
        </div>
      );
  }
}

export default ProfileCard;

// onClick = { this.clickHandler.bind(this) }>