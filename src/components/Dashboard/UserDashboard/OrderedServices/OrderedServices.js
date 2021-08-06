import React, { useEffect, useState } from 'react';

const OrderedServices = () => {
    const [orders, setOrders] = useState([])
    const email = sessionStorage.getItem("email");
    useEffect( () => {
        fetch("https://ancient-bayou-79993.herokuapp.com/getOudersByEmail", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email: email }),
            })
            .then((response) => response.json())
            .then((data) => {
                setOrders(data)
            })
            .catch((error) => {
            console.error(error);
            });
    }, [])

    return (
        <div className="bg-indigo-600 bg-opacity-100  m-2 p-5 rounded">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4 bg-indigo-600 border-2 bg-opacity-50">Name</th>
            <th className="w-1/4 bg-indigo-600 border-2 bg-opacity-50">Email</th>
            <th className="w-1/4 bg-indigo-600 border-2 bg-opacity-50">Address</th>
            <th className="w-1/6 bg-indigo-600 border-2 bg-opacity-50">phone</th>
            <th className="w-1/6 bg-indigo-600 border-2 bg-opacity-50">Service code</th>
            <th className="w-1/6 bg-indigo-600 border-2 bg-opacity-50">Status</th>
          </tr>
        </thead>
        <tbody>
            {
                orders.map((order)=>
                    <tr key={order._id} className="bg-blue-200 border-2 border-fuchsia-600" >
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{order.name}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{order.email}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{order.address}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{order.phone}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{order.serviceCode}</td>
                        <td className="bg-indigo-600 border-2 bg-opacity-50">{order.status}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
    );
};

export default OrderedServices;