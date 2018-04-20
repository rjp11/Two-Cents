import React, {Component} from 'react';

const ProfileCard = props => (
  
            <div className="col-lg-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        { props.destination }
                    </div>
                    <div className="panel-body">
                        <h4>Insert Image Here </h4>
                        <h6>with link to page </h6>
                        
                    </div>
                </div>
            </div>
)

export default ProfileCard;