import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import '../Banner/Banner.css';
import './service.css'

const AboutTravel = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, []);
    return (
        <>
        <div className="text-center ">
            
            <div className="my-2 bg-section d-flex align-items-center justify-content-center">
            
            </div>
            <Container className="">
            <Row>
                <Col sm={5} className="d-flex justify-content-center align-items-center">
                   <div>
                   <h1 className="banner-text">
                        HISTORY
                    </h1>
                    <h4>
                    Today in this post, I will share the best travel agency in Dhaka Bangladesh, to travel with you. So, now I am giving you the top 10 best travel agencies in Bangladesh. With them, you will be able to travel anywhere in Bangladesh and even to other countries. If you want to hire us to contact us for safe and comfortable travel with friends or family.
                    </h4>
                   </div>
                </Col>
                <Col sm={7} className="d-flex justify-content-center my-5 align-items-center">
                <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/low-angle-couple-traveling-with-map_23-2148714913.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/two-female-tourists-hold-map-find-places_1150-5745.jpg"
                    alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/tourist-making-photo-nature_1150-7742.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                </Col>

                <Col sm={7} className="d-flex justify-content-center my-5 align-items-center">
                <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80sts-hold-map-find-places_1150-5745.jpg"
                    alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                </Col>
                
                

                <Col sm={5} className="d-flex justify-content-center align-items-center">
                   <div>
                   <h3 className="banner-text">
                        About Maldives
                    </h3>
                    <h4>
                    The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities.
                    <br />
                    Maldives has the most beautiful tropical islands in the world. Tourism as an industry, came to the Maldives only in 1972 and has been growing fast. 
                    
                    </h4>
                   </div>
                </Col>
                
            </Row>
            </Container>
        </div>
        
        </>
    );
};

export default AboutTravel;