import React from 'react';
import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {

    const {id, first_name, experience, gender, team, img } = props.doctor;

    return (
        <Col lg={4} xs={6} className="my-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{first_name}</Card.Title>
                    <ListGroup className="list-group-flush text-start">
                        <ListGroupItem>Team of: {team}</ListGroupItem>
                        <ListGroupItem>Gender: {gender}</ListGroupItem>
                        <ListGroupItem>Experience: {experience} years</ListGroupItem>
                        <Link to={`/doctor/${id}`} className="mt-3 text-center">
                            <Button variant="success">Book a Appointment</Button>
                        </Link>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;