import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup, faTasks, faStream } from "@fortawesome/free-solid-svg-icons";
import "./AdminDashboard.css";
import profilePicture from '../../../../images/prof.jpg';
import AddService from "../AddService/AddService";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageServices from "../ManageServices/ManageServices";

const AdminDashboard = ( props ) => {
  const { name, profile } = props;
  const [ viewComponent, setviewComponent] = useState('addServices')
  return (
    <div>
      <div className="teacher-dashboard">
        <div className="dashboard-header">
          <h1 className='mt-2'><span style={{ fontSize:'50px'}} className="font-semibold text-xl tracking-tight">Admins dashboard</span></h1>
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
              <li onClick={() => setviewComponent('addServices')}><FontAwesomeIcon icon={faStream}></FontAwesomeIcon> Add Services</li>
              <li onClick={() => setviewComponent('manageServices')}><FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon> Manage Services</li>
              <li onClick={() => setviewComponent('ManageOrders')}><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon> Manage Orders</li>
            </ul>
          </div>
          <div className="functionality">
          {
            viewComponent === 'addServices'?
            <AddService></AddService> :<></>
          }
          {
            viewComponent === 'manageServices'?
            <ManageServices></ManageServices> :<></>
          }
          {
            viewComponent === 'ManageOrders'?
            <ManageOrder></ManageOrder>:<></>
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
