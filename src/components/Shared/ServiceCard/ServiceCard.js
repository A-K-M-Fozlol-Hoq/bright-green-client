import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServiceCard = (props) => {
    const { name, title,image,price, serviceCode} = props.service;
    return (
        <div className="rounded overflow-hidden shadow-lg m-3 p-2">
            <img className="w-full" src={`data:image/png;base64,${image.img}`} alt="Mountain"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{title}</p>
                <p className="text-gray-700 text-base mt-5">Price: {price} $</p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <Link to={`/ServiceDetails/${serviceCode}`}><button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" >View more <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
            <Link to={`/checkOut/${serviceCode}`}><button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md" >Buy Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
          </div>
        </div>
    );
};

export default ServiceCard;