import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const CovidInfo = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-danger">নতুন আক্রান্ত</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem>২৪ ঘণ্টা:	১৯৬</ListGroupItem>
                            <ListGroupItem>মোট:	১৫৭০৫৮১</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-danger">মৃত্যু</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem>২৪ ঘণ্টা:	৩</ListGroupItem>
                            <ListGroupItem>মোট:	২৭৮৯০</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-success">সুস্থ</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem>২৪ ঘণ্টা:	১৭৮</ListGroupItem>
                            <ListGroupItem>মোট:	১৫৩৪৪৭৮</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-warning">পরীক্ষা</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem>২৪ ঘণ্টা:	১৭৪৪৬</ListGroupItem>
                            <ListGroupItem>মোট:	১০৪৪৫২৯৪</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CovidInfo;