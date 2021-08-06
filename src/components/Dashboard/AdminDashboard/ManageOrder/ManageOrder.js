import React, { useEffect, useState } from "react";

const ManageOrder = () => {
    let status = 'pending';
    let ID;
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('https://ancient-bayou-79993.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setOrders(data.data)
        })
    }, [])

    const handleChange = (id) =>{
        console.log(id)
        ID=id;
        if(status==='pending'){
            status='confirm';
        }
        else{
            status='pending';
        }
        console.log(ID)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(ID, status)
        fetch("https://ancient-bayou-79993.herokuapp.com/updateStatusByID/" + ID, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ID: ID, status: status }),
        })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
            if (data.modifiedCount === 1) {
              alert(`updated status successfully of ${ID}`)
            }
          })
          .catch((error) => {
            console.log(error);
          })
    }
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
                        <td> 
                            <form onSubmit={handleSubmit}>
                                <select onChange={()=>handleChange(order._id)} value={order.status} name="status" id="status">
                                    <option value="pending">pending</option>
                                    <option value="confirm">Confirm</option>
                                </select>
                                <button type="submit" className="btn btn-warning">Update</button>
                            </form>
                        </td>
                        {/* <td className="bg-indigo-600 border-2 bg-opacity-50">{order.serviceCode}</td> */}
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
