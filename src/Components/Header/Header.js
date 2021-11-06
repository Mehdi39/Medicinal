import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    
                    <Navbar.Brand><Link to="/">Medicinal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex me-auto">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="btn btn-outline-dark">Search</Button>
                        </Form>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className=""><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link className=""><Link to="/services">Services</Link></Nav.Link>
                            <Nav.Link className=""><Link to="/blog">Blog</Link></Nav.Link>
                            <Nav.Link className=""><Link to="/aboutus">About Us</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;