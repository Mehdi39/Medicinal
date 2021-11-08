import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CovidSuggestions = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://corona.gov.bd/assets/new_home_assets/image/static/1.svg" />
                    <Card.Body>
                        <Card.Title className="text-success">করোনার উপসর্গ ও আপনার করনীয়</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem as={Link} to='/home'>সন্দেহভাজন করোনা রোগীর ক্ষেত্রে</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>মৃদু উপসর্গের ক্ষেত্রে</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>মাঝারি উপসর্গের ক্ষেত্রে</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>তীব্র উপসর্গের ক্ষেত্রে</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>পোস্ট কভিড উপসর্গের ক্ষেত্রে</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>করোনার নতুন লক্ষণ সমূহ</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://corona.gov.bd/assets/new_home_assets/image/static/2.svg" />
                    <Card.Body>
                        <Card.Title className="text-success">করোনা টেস্ট ও হাসপাতালে ভর্তি সংক্রান্ত তথ্য</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem as={Link} to='/home'>কোথায় টেস্ট করানো হয়?</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>ঢাকার ও ঢাকার বাইরে টেস্ট সার্ভিস</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>ঢাকার ও ঢাকার বাইরে বেড, আইসিইউ সার্ভিস</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://corona.gov.bd/assets/new_home_assets/image/static/3.svg" />
                    <Card.Body>
                        <Card.Title className="text-success">কোভিড-১৯ সংক্রান্ত সরাসরি ডাক্তারি পরামর্শ ও তথ্য সেবা</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem as={Link} to='/home'>কোভিড-১৯ স্বাস্থ্যসেবা</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>সাধারণ স্বাস্থ্যসেবা</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>মা ও শিশুর স্বাস্থ্যসেবা</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://corona.gov.bd/assets/new_home_assets/image/static/4.svg" />
                    <Card.Body>
                        <Card.Title className="text-success">কোভিড-১৯ টীকা সংক্রান্ত তথ্য</Card.Title>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem as={Link} to='/home'>নিবন্ধকরণ</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>অ্যাপ ডাউনলোড</ListGroupItem>
                            <ListGroupItem as={Link} to='/home'>ভ্যাক্সিন পরবর্তী শারীরিক জটিলতার বিষয়ে ডাক্তারি পরামর্শ</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CovidSuggestions;