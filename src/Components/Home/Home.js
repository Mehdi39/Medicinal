import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from './Banner';
import Doctor from './Doctor';
import Medicine from './Medicine'

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
                <Banner/>
                <h2 className="my-3">Regular Medicines</h2>
                <hr></hr>
                <Row>
                    {
                        medicines.map(medicine => <Medicine key={medicine.id} medicine={medicine}></Medicine>)
                    }   
                </Row>
                <h2 className="my-3">Our Best & Experianced Doctors</h2>
                <hr></hr>
                <Row>
                      {
                          doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                      }  
                </Row>
            </Container>
        </div>
    );
};

export default Home;