import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import UpdateLoggedInUserState from '../../Shared/UpdateLoggedInUserState/UpdateLoggedInUserState';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            {/* <UpdateLoggedInUserState></UpdateLoggedInUserState> */}
            {
                loggedInUser.email && loggedInUser.role && loggedInUser.name ?
                <></>
                :
                <UpdateLoggedInUserState></UpdateLoggedInUserState>
            }
            {
                loggedInUser.role === 'admin'?
                <AdminDashboard profile={loggedInUser.profile} name={loggedInUser.name}></AdminDashboard>
                :
                <UserDashboard profile={loggedInUser.profile} name={loggedInUser.name}></UserDashboard>
            }
        </div>
    );
};

export default Dashboard;