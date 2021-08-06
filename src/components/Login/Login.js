import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';


const Login = () => {
    const [ isNewUser, setIsNewUser ] = useState(false);
    const [loggedInUser, setLoggedInUser] =useContext (UserContext);
    initializeLoginFramework();
    const handleChange= (e)=>{
        console.log(e.target.name, e.target.value)
        loggedInUser[e.target.name]=e.target.value;
        console.log(loggedInUser)
    }
    const handleFormSubmit= (e)=>{
        e.preventDefault();
        if(isNewUser){
            if(loggedInUser.name && loggedInUser.email && loggedInUser.password){
                createUserWithEmailAndPassword(loggedInUser.name, loggedInUser.email, loggedInUser.password)
                .then(res => {
                    if(res.success === false){
                        alert(res.error)
                    }
                    else{
                        setLoggedInUser(res);
                        sessionStorage.setItem('email',res.email)
                        alert('You have ceated an account Successfully')
                    }
                })
            }
            else{
                alert('please provide all data properly')
            }
        }
        else{
            if(loggedInUser.email && loggedInUser.password){
                signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    console.log(res,'line 281')
                    if(res.success === false){
                        // setCheck('UserName or Password is not matching')
                        // console.log(res.success, check)
                        alert('UserName or Password is not matching')
                    }else{
                        //have to send user data to database
                        sessionStorage.setItem('email',res.email)
                        setLoggedInUser(res);
                        alert('You have logged In Successfully')
                    }
                })
            }
            else{
                alert('please provide all data properly')
            }
        }
    }
    return (
        <div>

            <div className="w-1/2 m-4 p-4 m-auto border-solid border-4 border-light-blue-500">
            <form className="w-full m-auto max-w-sm" onSubmit={handleFormSubmit}>
                <div className="md:flex md:items-center mb-6 ml-8">
                        <input onChange={() => setIsNewUser(!isNewUser)} type="checkbox" name="isNewUser" id="isNewUser" />
                        <label htmlFor="isNewUser" className="login-select">
                        <label htmlFor="isNewUser"><span className="new-user"></span>New User Sign Up</label>
                        </label> <br />
                </div>
                {
                    isNewUser &&
                    <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Full Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input name='name' onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                    </div>
                    </div>
                }
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                            Email
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input name='email' onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Password
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input name='password' onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <input type="submit" value={isNewUser ? 'Sign Up' : 'Sign In'} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"></input>
                    </div>
                </div>
            </form>
            </div>


        </div>
    );
};

export default Login;