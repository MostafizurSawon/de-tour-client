import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Area.css';

const Area = () => {
    return (
        <div className="area">
            <Container>
                <h1 className="text-center banner-text my-5">Our Coverage</h1>
            <Row className="area-height">
                <Col sm={6}>
                <Row>
                    <Col sm={6} className="bg-area-one my-2 d-flex align-items-end justify-content-center">
                    <h4 className="area-btn py-2">Start Now</h4>
                    </Col>
                    <Col sm={6} className="my-2">
                        <Row className="mb-2">
                            <Col sm={6} >
                                <img className="w-100" src="https://image.freepik.com/free-photo/summer-product-backdrop-swimming-pool_53876-143230.jpg" alt="" />
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="w-100 mt-2">
                                        <h6>Lake View</h6>
                                        <small className="text-muted">
                                            <i class="fas fa-map-marker-alt me-2"></i>
                                             Bali
                                        </small>
                                        <button className="area-btn mt-3">From $700</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col sm={6} >
                                <img className="w-100" src="https://image.freepik.com/free-photo/woman-using-camera-taking-photo-train-station-grayscale_53876-147473.jpg" alt="" />
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="w-100 mt-2">
                                        <h6>Photo genic</h6>
                                        <small className="text-muted">
                                            <i class="fas fa-map-marker-alt me-2"></i>
                                             Tokyo
                                        </small>
                                        <button className="area-btn mt-3">From $600</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col sm={6} >
                                <img className="w-100" src="https://image.freepik.com/free-photo/rear-view-businessman-paper-boat_1154-718.jpg?1" alt="" />
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="w-100 mt-2">
                                        <h6>Sea Shore</h6>
                                        <small className="text-muted">
                                            <i class="fas fa-map-marker-alt me-2"></i>
                                             Australlia
                                        </small>
                                        <button className="area-btn mt-3">From $500</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>

                </Col>
                <Col sm={6}>
                <Row>
                    <Col sm={6} className="bg-area-two my-2 d-flex align-items-end justify-content-center">
                        <h4 className="area-btn py-2">Forever young</h4>
                    </Col>
                    <Col sm={6} className="my-2">
                        <Row className="mb-2">
                            <Col sm={6} >
                                <img className="w-100" src="https://image.freepik.com/free-photo/caucasian-family-is-enjoying-summer-vacation_53876-138042.jpg" alt="" />
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="w-100 mt-2">
                                        <h6>Sea Shore</h6>
                                        <small className="text-muted">
                                            <i class="fas fa-map-marker-alt me-2"></i>
                                             Australlia
                                        </small>
                                        <button className="area-btn mt-3">From $650</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col sm={6} >
                                <img className="w-100" src="https://image.freepik.com/free-photo/nature-product-backdrop-pine-tree-mountain_53876-143208.jpg" alt="" />
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="w-100 mt-2">
                                        <h6>Forest thick</h6>
                                        <small className="text-muted">
                                            <i class="fas fa-map-marker-alt me-2"></i>
                                             Brazil
                                        </small>
                                        <button className="area-btn mt-3">From $800</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col sm={6} >
                                <img className="w-100" src="https://image.freepik.com/free-photo/life-guard-chair-flotation-buoy-sea-shore-concept_53876-137591.jpg" alt="" />
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="w-100 mt-2">
                                        <h6>Sea Shore</h6>
                                        <small className="text-muted">
                                            <i class="fas fa-map-marker-alt me-2"></i>
                                             Australlia
                                        </small>
                                        <button className="area-btn mt-3">From $500</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>

                </Col>

            </Row>
            </Container>
        </div>
    );
};

export default Area;