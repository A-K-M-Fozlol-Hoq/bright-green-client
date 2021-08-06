import React, { useEffect, useState } from 'react';
import './ServiceDetails.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link, useParams } from 'react-router-dom';


const ServiceDetails = ( props ) => {
    const { serviceCode } = useParams();
    const [service, setService] = useState({})
    
    useEffect( () => {
        fetch("https://ancient-bayou-79993.herokuapp.com/getFullServiceByServiceCode", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ serviceCode: serviceCode }),
            })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setService(data[0])
            })
            .catch((error) => {
            console.error(error);
            });
    }, [])

    const { name, title, price, description, image } = service || {};
    let headerStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(data:image/png;base64,${image?.img})`,
        // backgroundImage: `url(https://tailwindui.com/img/category-thumbnails/application-ui/sidebar.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <div>
            <div className="mt-3">
            <Link to='/'  className='text-danger bg-warning m-2 p-2 rounded' style={{width:'80px', cursor: 'pointer'}}><b>&larr;</b> BACK</Link><br /><br />
            </div>
            <div className='service-details -mt-20' >
            <div style={headerStyle}>
            </div>
            <div className="content bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                <div className="description">
                    <div className="text-center">
                    <p>{name}</p>
                    <p>{title}</p>
                    <p>Price: {price}$</p>
                    </div>
                    <br />
                    <p>{description}</p>
                </div>
                <div className="social">
                    <a className="icon twitter" href='/' target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a className="icon facebook" href='/' target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a className="icon youtube" href='/' target="_blank"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                </div>
        </div>
     </div>
        </div>
    );
};


export default ServiceDetails;