import React from 'react';
import { Row, Col, Accordion, Button } from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';
import './Banner.css';

const Banner = () => {
   
    return (
        <>
        <Row className="custom-banner">
            <Col className="banner-container d-flex align-items-center">
                <div className="mx-auto w-100 text-center">
                    <h1 className="banner-text">

                    <AnimatedText
                        type='words'
                        interval={0.34}
                        duration={0.69}
                        animation={{
                        y: '100px',
                        ease: 'ease-in-out',
                        scale: 2.1,
                        }}
                    >
                        
                        
                        Welcome to De-TOUR
                        
                        </AnimatedText>
                    </h1>
                    <p className="banner-p">

                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="bounce"
                        interval={.46}
                        duration={1.4}
                        tag="p"
                        className="animated-paragraph text-light"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                        >
                        
                        Your Dream Tour Awaits
                        
                        </AnimatedText>
                    </p>
                    
                    <div className="d-flex justify-content-center">
                    <button className="banner-button"> See All Offers</button>
                    </div>
                </div>
            </Col>
        </Row>
        </>
    );
};

export default Banner;