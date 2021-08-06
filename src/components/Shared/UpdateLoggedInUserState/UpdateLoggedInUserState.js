import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';


const UpdateLoggedInUserState = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email =sessionStorage.getItem('email');
    console.log(email,'UpdateLoggedInUserState')
    useEffect(()=>{
        fetch('https://ancient-bayou-79993.herokuapp.com/getFullUserByEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email:email })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0],'UpdateLoggedInUserState --start')
                setLoggedInUser(data[0])
                console.log(loggedInUser,'UpdateLoggedInUserState --end')
            })
            .catch(error => {
                console.error(error)
            })
    },[email])

    return (
        <div>
            
        </div>
    );
};

export default UpdateLoggedInUserState;