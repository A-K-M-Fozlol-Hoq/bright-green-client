import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import "./UserDashboard.css";
import profilePicture from '../../../../images/prof.jpg';
import OrderedServices from "../OrderedServices/OrderedServices";

const UserDashboard = ( props ) => {
  const { name, profile } = props;
  const [ viewComponent, setviewComponent] = useState('orderesServices')
  return (
    <div>
      <div className="teacher-dashboard">
        <div className="dashboard-header">
          <h1 className='mt-2'><span style={{ fontSize:'50px'}} className="font-semibold text-xl tracking-tight">Users dashboard</span></h1>
        </div>
        <div className="dashboard-functionality row">
          <div className="sidebar">
          <div className="profile-pic-div">
            {
              profile?
              <img src={profile} alt=''></img>
              :
              <img src={profilePicture} alt="profilePicture" />
            }
            </div>
            <h5 className="user-name">{name}</h5>
            <ul>
              <li onClick={() => setviewComponent('orderesServices')}><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon> Ordered Services</li>
            </ul>
          </div>
          <div className="functionality pt-50 pb-50">
          {
            viewComponent === 'orderesServices'?
            <OrderedServices></OrderedServices>:<></>
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
