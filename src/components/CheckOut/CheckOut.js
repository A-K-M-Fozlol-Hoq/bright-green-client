import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@material-ui/core';

const CheckOut = () => {
    const email = sessionStorage.getItem("email");
    const { serviceCode } = useParams();
    const [ info, setInfo ] = useState({});
    console.log(serviceCode)
    const handleChange = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info)
        // console.log(info.email, info.name, info.address, info.country, info.phone)
        if((info.name?.trim().length > 1) && (info.email?.trim().length > 1) && (info.address?.trim().length > 1) && (info.country?.trim().length > 1) && (info.phone?.trim().length > 10)){
            const formData = new FormData()
            console.log(info);
            formData.append('name', info.name);
            formData.append('email', email);
            formData.append('address', info.address);
            formData.append('country', info.country);
            formData.append('phone', info.phone);
            formData.append('serviceCode', serviceCode);
            formData.append('status', 'pending');
            fetch('https://ancient-bayou-79993.herokuapp.com/addOrder', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('Order placed successfully')
                    }
                    else{
                        alert('Failed to place order: ')
                    }
                })
                .catch(error => {
                    alert('Failed to add service: ')
                })
        }else{
            alert('Please Provide all data properly')
        }
    }
    return (
        <div>
            <div className="bg-gray-300">
                <div className="py-12">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
                        <div className="md:flex ">
                            <div className="w-full p-4 px-5 py-5">
                                <div className="flex flex-row">
                                    <h2 className="text-3xl font-semibold">Bright </h2>
                                    <h2 className="text-3xl text-green-400 font-semibold"> Green</h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-row pt-2 text-xs pt-6 pb-5">
                                        <span className="font-bold">Information</span> 
                                        <small className="text-gray-400 ml-1"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></small> 
                                        <span className="text-gray-400 ml-1">Shopping</span> 
                                        <small className="text-gray-400 ml-1"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></small> 
                                        <span className="text-gray-400 ml-1">Payment</span> 
                                        </div> <span>Customer Information</span>
                                    <div className="relative pb-5">
                                        <input onChange={handleChange} type="text" name="email" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail"/> 
                                    </div> 
                                    <span>Shipping Address</span>
                                    <input onChange={handleChange} type="text" name="name" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="name*"/> 
                                    <input onChange={handleChange} type="text" name="address" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*"/> 
                                    <input onChange={handleChange} type="text" name="country" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Country*"/> 
                                    <input onChange={handleChange} type="text" name="phone" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*"/>
                                    <div className="flex justify-between items-center pt-2"> 
                                        <Link className="h-12 w-24 text-blue-500 text-xs font-medium" to="/">Return to homepage</Link>
                                        <button className="btn btn-primary mt-5" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;