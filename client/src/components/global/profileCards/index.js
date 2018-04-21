import React from 'react';
import "./profileCards.css";
import {Link} from 'react-router-dom';

const ProfileCard = props => (
  
            <div className="col-lg-4">
                <div className="panel panel-default" data-id={ props.id }>
                    <div className="panel-heading">
                        { props.destination }
                    </div>
                    <div className="panel-body">
                        <Link to={`/destination/${props.id}`}>
                            <img className="card" alt="Sicilian Newsstand" src="https://farm5.staticflickr.com/4477/37543488160_a487b3f012_b.jpg" />   
                        </Link>                
                    </div>
                </div>
            </div>
)

export default ProfileCard;