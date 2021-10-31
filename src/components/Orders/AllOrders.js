import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllOrders = () => {
  const { user } = useAuth();
    const [services, setServices] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    useEffect(() => {
      fetch("http://localhost:5000/login-orders")
        .then((response) => response.json())
        .then((data) => setServices(data));
    }, [isDelete]);

// delete an user
const handleDeleteOrder = (id) => {
    // console.log(id);
    const proceed = window.confirm(`Sure you want to delete?`);
    if(proceed) {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result);
        if (result.deletedCount) {
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
    }
  };
return (
    <div>
        Email based order total : {services.length}
        <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Place name</th>
                    <th>User Info</th>
                    <th>Date</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
                </thead>
            {
                services.map((service) => 
                // <li>
                //    place {service.name} <br />
                //     {service.userName} <br />
                //     {service.email} <br />
                //     {service.price} <br />
                //     {service.date} <br />
                //     <button onClick={() => handleDeleteOrder(service._id)} className="btn btn-danger">delete</button>
                // </li>

                <tbody>
                <tr>
                <td>
                    {service.name}
                    <br />
                   Price : ${service.price}
                   
                </td>
                <td>
                    <h6>
                        Name :  {user.displayName} 
                    </h6>
                    <h6>
                        Email :  {user.email} 
                    </h6>
                    <h6>
                        Phone : {service.phone}
                    </h6>
                    <h6>
                   Address : {service.address}
                    </h6>
                </td>
                <td>Address :  {service.date} </td>
                
                <td>
                    <div className="bg-danger p-2 text-white">
                        {service.status}
                    </div>
                    
                </td>
                <td>
                <button onClick={() => handleDeleteOrder(service._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
            </tbody>
                )
            }
        </Table>
    </div>
);
};

export default AllOrders;