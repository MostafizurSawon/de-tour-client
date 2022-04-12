import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './services.css';


const Services = () => {
        const [services, setServices] = useState([]);
        useEffect(() => {
          fetch("https://frightful-barrow-97989.herokuapp.com/services")
            .then((response) => response.json())
            .then((data) => setServices(data));
        }, []);
      

    return (
        <div className="bg-service pb-3">
            <div className="mt-5 text-center bg-info text-light bold py-5">
              <h1 className="banner-text">Our Services</h1>
            </div>
            <Row xs={1} md={3} className="g-4 my-4 mx-5">
            {services.map((service, index) => (
                <Col key={service._id}>
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
            </Row>
        </div>
    );
};

export default Services;