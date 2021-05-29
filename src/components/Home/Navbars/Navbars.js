import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navbars = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <div className="container">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navbars;