import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './services.css';


const Services = () => {
        const [services, setServices] = useState([]);
        // const [isDelete, setIsDelete] = useState(null);
        useEffect(() => {
          fetch("http://localhost:5000/services")
            .then((response) => response.json())
            .then((data) => setServices(data));
        }, []);
      
        // const handleDeleteOrder = (id) => {
        //   console.log(id);
      
        //   fetch(`http://localhost:5000/deleteOrder/${id}`, {
        //     method: "DELETE",
        //     headers: { "Content-type": "application/json" },
        //   })
        //     .then((res) => res.json())
        //     .then((result) => {
        //       if (result.deletedCount) {
        //         setIsDelete(true);
        //       } else {
        //         setIsDelete(false);
        //       }
        //     });
        // };
      
        const handleAddToCart = (index) => {
          const data = services[index];
        //   data.email = "ami@gmail.com";
          fetch(`http://localhost:5000/add-orders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.insertedId) {
                alert("add hoise broooo ");
              } else {
                alert("add korte pari nai");
              }
            });
        };

    return (
        <div>
            <div className="mt-5 text-center bg-info text-light bold py-5">
              <h1>Our Services</h1>
            </div>
            <Row xs={1} md={3} className="g-4 my-4 mx-5">
            {services.map((service, index) => (
                <Col>
                    <Card>
                        <Card.Img className="image-height"  variant="top" src={service.image} />
                        <Card.Body>
                        <Card.Title>Place : {service.name}</Card.Title>
                        <Card.Text>
                           Price: $ {service.price}
                        </Card.Text>
                        <Card.Text>
                            {service.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className={service.colour}>
                        
                        <Link to={`/services/${service._id}`}>
                        <div className="d-grid mx-auto">
                        <Button className="banner-button text-dark" variant="success" size="lg">Book Now</Button>
                        </div>
                        </Link>
                        
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
            {/* <col>
            <img src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?size=338&ext=jpg" alt="" className="w-100" />
            </col> */}
            </Row>
        </div>
    );
};

export default Services;