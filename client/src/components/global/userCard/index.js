import React, {Component} from 'react';
// import "./profileCards.css";
import {Route} from 'react-router-dom';

class UserCard extends Component {
    clickHandler = () => {
        this.props.setSearchedUser(this.props.id);
    }

  render() {
      return (
        <div className="col-lg-4">
        <div className="panel panel-default" data-id={ this.props.id }>
            <div className="panel-heading text-center">
                <h1>{this.props.first_name.toUpperCase()} {this.props.last_name.toUpperCase()} </h1>
            </div>
            <Route render = {({history}) => (
                <div className="panel-body"
                    onClick = { () => { history.push(`/profile/${this.props.key}`); this.clickHandler() } }>
                    <img className="card" alt={ this.props.id } src={ this.props.img } />
                </div>
            )} />
            
        </div>
    </div>
      );
  }
}

export default UserCard;