import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import './services.css';

const TakeService = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);
    const [service, setService] = useState({});
    useEffect(() => {
      fetch(`https://frightful-barrow-97989.herokuapp.com/singleservice/${serviceId}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [serviceId, isUpdate]);
  
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = (data) => {
      console.log(data);
      fetch("https://frightful-barrow-97989.herokuapp.com/add-orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result))
        alert("Successfully Booked!!")
        reset();
    };


    return (
        <div className="bg-custom py-5">
            <h1 className="my-2 text-center banner-text mt-3">
                Please provide your information.  
            </h1>
            <Row xs={1} md={3} className="g-4 my-2 mx-5">
              <Col sm={2} md={6} className="custom-card border-0 py-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                {service.name &&  <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={service.name} type="text" {...register("name")} />}
                <br />
                {service.price && <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={service.price} type="price" {...register("price")} />}
                <br />
                <input  className="my-1 py-2 w-100"  readOnly={true} defaultValue={user?.email} {...register("email")} />
                <br />
                <input  className="my-1 py-2 w-100"  defaultValue={user?.displayName} {...register("userName")} placeholder="Your Name" />
                <br />
                <input  className="my-1 py-2 w-100"   {...register("address")} type="text" placeholder="Your Adress" />
                <br />
                <input  className="my-1 py-2 w-100"  type="text" {...register("phone")} placeholder="Your Phone Number" />
                <br />
                <input  className="my-1 py-2 w-100"  readOnly={true} type="text" defaultValue="Pending" {...register("status")} />
                <br />
                <input  className="my-1 py-2 w-100"  defaultValue={new Date()} type="date" {...register("date")} />
                <br />
                <input  className="my-1 py-2 w-100 custom-btnn"  type="submit" />
            </form>
            </Col>
            <Col sm={12} md={6}>
        <Card className="custom-card border-0 ">
        <Card.Img className="custom-img mx-auto p-3" variant="top" fluid src={service.image} />
        <Card.Body className='mx-auto'>
            <Card.Title>User Name : {user.displayName}</Card.Title>
            <Card.Title>User Email : {user?.email}</Card.Title>
            <Card.Text>
            Place : {service.name}
            </Card.Text>
            <Card.Text>
            description :  {service.description}
            </Card.Text>
            <Card.Text>
            <b>Price : $ {service.price}</b> 
            </Card.Text>
        </Card.Body>
        <Link to='/home'>
            <button  className="m-2 custom-btnn"> Back to  Home <i className="fas fa-chevron-circle-right ms-3"></i></button>
        </Link>
        </Card>
        </Col>
            </Row>
        </div>
    );
};

export default TakeService;