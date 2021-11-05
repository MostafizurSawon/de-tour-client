import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllOrders = () => {
  const { user } = useAuth();
    const [services, setServices] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const [title, setTitle] = useState("Click here");

    const Title = () => {
      const [title, setTitle] = useState("Click here");
   
      return <h1 onClick={() => setTitle("New title")}>{title}</h1>;
   }
    useEffect(() => {
      fetch("https://frightful-barrow-97989.herokuapp.com/login-orders")
        .then((response) => response.json())
        .then((data) => setServices(data));
    }, [isDelete]);

// delete an user
const handleDeleteOrder = (id) => {
    // console.log(id);
    const proceed = window.confirm(`Sure you want to delete?`);
    if(proceed) {
        fetch(`https://frightful-barrow-97989.herokuapp.com/deleteOrder/${id}`, {
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
        <h2 >All user : {services.length}</h2>
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
                <tbody>
                <tr>
                <td>
                    {service.name}
                    <br />
                   Price : ${service.price}
                   
                </td>
                <td>
                    <h6>
                        Name :  {service.userName} 
                    </h6>
                    <h6>
                        Email :  {service.email} 
                    </h6>
                    <h6>
                        Phone : {service.phone}
                    </h6>
                    <h6>
                   Address : {service.address}
                    </h6>
                </td>
                <td> {service.date} </td>
                
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