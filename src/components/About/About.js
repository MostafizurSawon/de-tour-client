import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './About.css';

const About = () => {
    return (
        <div>
            <Row>
                <Col sm={5}>
                    <img className=" w-100" src="https://image.freepik.com/free-photo/group-happy-laughing-doctors-with-gesture-thumbs-up-standing-line_186202-2190.jpg" alt="" />
                </Col>
                <Col sm={7}>
                    <h4>Welcome to De-TOUR<h2 className="about-border"></h2></h4>
                    <p>The United States National Library of Medicine credits the hospital as being a product of medieval Islamic civilization. Compared to contemporaneous Christian institutions, which were poor and sick relief facilities offered by some monasteries, the Islamic hospital was a more elaborate institution with a wider range of functions.
                    </p>
                    <p>    
                    In Islam, there was a moral imperative to treat the ill regardless of financial status. Islamic hospitals tended to be large, urban structures, and were largely secular institutions, many open to all, whether male or female, civilian or military, child or adult, rich or poor, Muslim or non-Muslim. The Islamic hospital served several purposes, as a center of medical treatment, a home for patients recovering from illness or accidents, an insane asylum, and a retirement home with basic maintenance needs for the aged and infirm.</p>
                    <button className="btn btn-light border-0">Read More...</button>
                </Col>
            </Row>


            {/* History section starts */}
            <Row className="my-5">
                <h1 className="text-center doctor-h1 mb-4">Our history</h1>
                <Col className="d-flex justify-content-center align-items-center" sm={7}>
                    <div>
                        <h2 className="doctor-h1">2021</h2>
                        <h1 className='about'>One of the Top 10 Hospital in the country</h1>
                        <p>    
                    In Islam, there was a moral imperative to treat the ill regardless of financial status. Islamic hospitals tended to be large, urban structures, and were largely secular institutions, many open to all, whether male or female, civilian or military, child or adult, rich or poor, Muslim or non-Muslim. The Islamic hospital served several purposes, as a center of medical treatment, a home for patients recovering from illness or accidents, an insane asylum, and a retirement home with basic maintenance needs for the aged and infirm.</p>
                    </div>
                    
                </Col>
                <Col sm={5}>
                    <img className=" w-100" src="https://image.freepik.com/free-vector/top-10-golden-podium-award_1017-32088.jpg" alt="" />
                </Col>
            </Row>
            <Row className="my-5 ">
                
                <Col sm={5}>
                    <img className=" w-100" src="https://img.freepik.com/free-photo/growth-arrow-icon-isolated_53876-71266.jpg?size=338&ext=jpg" alt="" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center" sm={7}>
                    <div>
                        <h2 className="doctor-h1">2015</h2>
                        <h1 className='about'>Extended 5 hospital to the country</h1>
                        <p>    
                    In Islam, there was a moral imperative to treat the ill regardless of financial status. Islamic hospitals tended to be large, urban structures, and were largely secular institutions, many open to all, whether male or female, civilian or military, child or adult, rich or poor, Muslim or non-Muslim. The Islamic hospital served several purposes, as a center of medical treatment, a home for patients recovering from illness or accidents, an insane asylum, and a retirement home with basic maintenance needs for the aged and infirm.</p>
                    </div>
                    
                </Col>
            </Row>
            <Row className="my-5 ">
                
                <Col className="d-flex justify-content-center align-items-center" sm={7}>
                    <div>
                        <h2 className="doctor-h1">2011</h2>
                        <h1 className='about'>Won Rising Hospital of the Year</h1>
                        <p>    
                        In Islam, there was a moral imperative to treat the ill regardless of financial status. Islamic hospitals tended to be , a home for patients recovering from illness or accidents, an insane asylum, and a retirement home with basic maintenance needs for the aged and infirm.</p>
                        <p>    
                        In Islam, there was a moral imperative to treat the ill regardless of financial status. Islamic hospitals tended to be larent, a home for patients recovering from illness or accidents, an insane asylum, and a retirement home with basic maintenance needs for the aged and infirm.</p>
                    </div>
                    
                </Col>
                
                <Col sm={5}>
                    <img className=" w-100" className="image-fluid w-100"  src="https://image.freepik.com/free-vector/successful-businessman-running-up-career-stairs-rising-arrow-star_335657-3299.jpg" alt="" />
                </Col>
            </Row>
            <Row className="my-5 ">  
            <Col sm={7}>
                    <img className=" w-100" src="https://image.freepik.com/free-vector/business-discussion-verbal-communication-colleagues-conversation-corporate-conference-partnership-establishment-negotiation-office-meeting_335657-1621.jpg" alt="" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center" sm={5}>
                    <div>
                        <h2 className="doctor-h1">2011</h2>
                        <h1 className='about'>Established</h1>
                    </div>
                    
                </Col>
            </Row>
        </div>
    );
};

export default About;