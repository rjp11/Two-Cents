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
                            <img className="card" alt="Sicilian Newsstand" src={ props.img} />   
                        </Link>                
                    </div>
                </div>
            </div>
)

export default ProfileCard;