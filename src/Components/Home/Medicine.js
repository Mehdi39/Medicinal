import React from 'react';
import { Card, Button, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Medicine = (props) => {
    const { id, product_name, company_name, price, img } = props.medicine;
    return (
        <Col lg={4} xs={6} className="my-3">
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <ListGroup className="list-group-flush text-start">
                        <ListGroupItem>Company: {company_name}</ListGroupItem>
                        <ListGroupItem>Price: ${price}</ListGroupItem>
                        <Link to={`/medicine/${id}`} className="mt-3 text-center">
                            <Button variant="success">Add to cart</Button>
                        </Link>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Medicine;