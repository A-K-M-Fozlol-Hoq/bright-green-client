import React, { useEffect, useState } from "react";
import CircularStatic from "../../../Shared/CircularProgressWithLabel/CircularProgressWithLabel";

const ManageServices = () => {
    const [dataLoaded, setDataLoaded] = useState(false)
    const [serviceCode, setServiceCode] = useState('')
    const [services, setServices] = useState([])
    useEffect( () => {
        setDataLoaded(false)
        fetch('https://ancient-bayou-79993.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setServices(data.data)
            setDataLoaded(true)
        })
    }, [])

    const handleClick = (serviceCode,name) =>{
        console.log(serviceCode)
        setServiceCode(serviceCode)
        // deleteServiceByServiceCode
        fetch("https://ancient-bayou-79993.herokuapp.com/deleteServiceByServiceCode", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ serviceCode: serviceCode }),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.acknowledged){
                    alert( `${name}  deleted successfully...`)
                }
                else{
                    alert('failed to delete service'+name)
                }
            })
            .catch((error) => {
            console.error(error);
            alert('failed to delete service'+name)
            });
    }
  return (
    <div className="bg-indigo-600 bg-opacity-100  m-2 p-5 rounded">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4 bg-indigo-600 border-2 bg-opacity-50">name</th>
            <th className="w-1/4 bg-indigo-600 border-2 bg-opacity-50">Title</th>
            <th className="w-1/4 bg-indigo-600 border-2 bg-opacity-50">Price</th>
            <th className="w-1/6 bg-indigo-600 border-2 bg-opacity-50">serviceCode</th>
            <th className="w-1/6 bg-indigo-600 border-2 bg-opacity-50">Delete</th>
          </tr>
        </thead>
        {
            dataLoaded ?
            <tbody>
            {
                services.map((service)=>
                    <tr key={service._id} className="bg-blue-200 border-2 border-fuchsia-600" >
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{service.name}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{service.title}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{service.price}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{service.serviceCode}</td>
                        <td> 
                            <button onClick={()=>handleClick(service.serviceCode,service.name)} type="submit" className="btn btn-warning">Delete</button>
                        </td>
                        {/* <td className="bg-indigo-600 border-2 bg-opacity-50">{order.serviceCode}</td> */}
                    </tr>
                )
            }
            </tbody>
            :
            <div style={{color: 'black'}} className="m-auto m-5 mt-5 rounded p-5 text-center bg-secondary">
                <h3 className='text-white-700 text-opacity-100 mb-3'>Data Loading...</h3>
                <CircularStatic></CircularStatic>
            </div>
        }
        
      </table>
    </div>
  );
};

export default ManageServices;
