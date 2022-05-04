import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">BUNON</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="services">Services</Nav.Link>
                        <Nav.Link as={CustomLink} to="/artists">Artists</Nav.Link>
                        <Nav.Link as={CustomLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={CustomLink} to="/checkout">Checkout</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                        <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;