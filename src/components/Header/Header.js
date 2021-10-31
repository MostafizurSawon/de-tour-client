import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-end" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink className="customLogo" activeClassName="activeStyleLogo" exact="true" to="/">
                            <span className="logo-text-first"><i class="fas fa-jedi"></i> De-Tour</span>
                        </NavLink>
                    </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/services">
                                  Services
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/admin">
                                  Dashboard
                        </NavLink>
                        </Nav.Link>

                        {user.email && 
                        <Nav.Link>
                            <div className="w-100">
                            <Row className="d-flex align-items-center">
                            <Col sm={2}>
                                <Image className="header-pic-size ms-2" src={user?.photoURL} roundedCircle />
                            </Col>
                            <Col sm={9} className="header-pic ms-3" style={{ color: 'green', fontWeight: 'bold' }}> {user?.displayName}
                            </Col>
                            </Row>
                            </div>
                        </Nav.Link> }
                        {
                            user.email ?
                        <Nav.Link>
                        <NavLink className="custom-logout d-flex align-items-center" activeClassName="activeStyle" to="/register" onClick={logOut}>Logout <i className="ms-2 fas fa-sign-out-alt"></i>
                        </NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link>
                        <NavLink className="custom d-flex align-items-center " activeClassName="activeStyle" to="/register">
                        <i class="fas fa-user-plus"></i> Register 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;