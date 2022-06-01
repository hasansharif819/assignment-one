import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Headers.css'

const Header = () => {

    return (
        <div className='headers'>
            <div className='logo'>
                <h1>Logo</h1>
                <p><span className='BN'>BN</span> / EN</p>
            </div>
            <Navbar collapseOnSelect expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <nav className="navBar">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/advertisers">ADVERTISERS</Nav.Link>
                            <Nav.Link as={Link} to="/publishers">PUBLISHERS</Nav.Link>
                            <Nav.Link as={Link} to="/influencers">INFLUENCERS</Nav.Link>
                            <Nav.Link as={Link} to="/adFormats">AD FORMATS</Nav.Link>
                            <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                            <Nav.Link as={Link} to="/contactus">CONTACT US</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                            <nav className='loginButton bg-white rounded'>
                            </nav>
                            <nav className="navBar-button">
                            <Nav.Link as={Link} to="/login" className='buttonClass'>LOGIN</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className='signUpButton'>SIGNUP</Nav.Link>
                            </nav>
                           
                            </nav>
                        </Nav>
                        
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;