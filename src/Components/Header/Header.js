import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth();
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    
                    <Navbar.Brand ><Link to="/" className="text-dark text-decoration-none">Medicinal</Link></Navbar.Brand>
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
                            <Nav.Link><Link to="/" className="text-dark text-decoration-none">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/services" className="text-dark text-decoration-none">Services</Link></Nav.Link>
                            <Nav.Link><Link to="/blog" className="text-dark text-decoration-none">Blog</Link></Nav.Link>
                            <Nav.Link><Link to="/appointment" className="text-dark text-decoration-none">Appointment</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ? 
                                <Button className="text-dark text-decoration-none" onClick={logOut} variant="light">
                                   Logout 
                                </Button> : 
                                <Nav.Link className="text-dark text-decoration-none" as={Link} to="/login">
                                    Sing In
                                </Nav.Link>
                            }
                        </Nav>
                        <Nav.Link>{user?.displayName}</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;