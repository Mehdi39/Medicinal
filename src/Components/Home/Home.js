import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import Banner from './Banner';
import Doctor from './Doctor';
import Medicine from './Medicine'
import { Link } from 'react-router-dom';
import CovidInfo from './CovidInfo';
import CovidSuggestions from './CovidSuggestions';

const Home = () => {
    const [medicines, setMedicines] = useState([])
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("./medicine.json")
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    useEffect(() => {
        fetch("./doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <Container>
                <Banner />
                <h2 className="my-3 text-success">Regular Medicines</h2>
                <hr></hr>
                <Row>
                    {
                        medicines.map(medicine => <Medicine key={medicine.id} medicine={medicine}></Medicine>)
                    }
                </Row>
                <h2 className="my-3 text-success">Our Best & Experianced Doctors</h2>
                <hr></hr>
                <Row>
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </Row>
                <h2 className="text-center my-5 text-danger">কোভিড-১৯ বিষয়ক ড্যাশবোর্ড</h2>
                <CovidInfo/>
                <hr className="my-5"/>
                <h2 className="text-center my-5 text-success">করোনার উপসর্গ ও আপনার করনীয়</h2>
                <CovidSuggestions/>
            </Container>
        </div>
    );
};

export default Home;