import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../imaige/logo2.jpg';
import './Header.css'
import { toast, ToastContainer } from 'react-toastify';
import Lodding from '../Lodding/Lodding';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const signOutHandaler = () => {
        signOut(auth);
        toast("You are signed out")
    }
    if (loading) {
        return (
            <Lodding />
        );
    }
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg ">
                <Container>
                    <Navbar.Brand style={{ width: "100px" }} as={Link} to="/home">
                        <img className='w-100 rounded' src={logo} alt="imaige" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link className='home' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='checkOut' as={Link} to="/checkout">Check Out</Nav.Link>
                            <Nav.Link className='blogs' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='about' as={Link} to="/about">About Me</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            {!user ?
                                <>
                                    <Nav.Link className='loginBtn' as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link className='signupBtn text-light px-4' as={Link} to="/signup">
                                        Sign-in
                                    </Nav.Link>
                                </> :
                                <Nav.Link onClick={signOutHandaler} className='signOutBtn text-light px-4'>
                                    Sign-out
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </div>
    );
};

export default Header;