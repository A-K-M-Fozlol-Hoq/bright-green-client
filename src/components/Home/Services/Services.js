import React, { useEffect, useState } from 'react';
import CircularStatic from '../../Shared/CircularProgressWithLabel/CircularProgressWithLabel';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect( () => {
        fetch('https://ancient-bayou-79993.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setServices(data.data)
            setDataLoaded(true)
        })
    }, [])
    return (
        <div>
            {
                dataLoaded ?
                <div className="w-11/12 m-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    services?.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
                </div>:
                <div className="m-auto m-5  p-5 text-center">
                    <h3 className='text-purple-700 text-opacity-100 mb-3'>Data Loading...</h3>
                    <CircularStatic></CircularStatic>
                </div>
            }
        </div>
    );
};

export default Services;