import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../imaige/logo2.jpg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg ">
                <Container>
                    <Navbar.Brand style={{ width: "100px" }} as={Link} to="/home">
                        <img className='w-100 rounded' src={logo} alt="imaige" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link className='about' as={Link} to="/about">About Me</Nav.Link>
                            <Nav.Link className='loginBtn' as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link className='signupBtn text-light px-4' as={Link} to="/signup">
                                Sign-in
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;