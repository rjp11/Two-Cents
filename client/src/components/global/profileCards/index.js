import React, {Component} from 'react';
import "./profileCards.css";

const ProfileCard = props => (
  
            <div className="col-lg-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        { props.destination }
                    </div>
                    <div className="panel-body">
                        <img className="card" alt="Sicilian Newsstand" src="https://farm5.staticflickr.com/4477/37543488160_a487b3f012_b.jpg" />                        
                    </div>
                </div>
            </div>
)

export default ProfileCard;