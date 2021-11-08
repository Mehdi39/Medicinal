import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Home/Doctor';
import Medicine from '../Home/Medicine';

const Services = () => {

    // managing states of medicines/doctors
    const [medicines, setMedicines] = useState([])
    const [doctors, setDoctors] = useState([])

    // fetching data for medicne information
    useEffect(() => {
        fetch("./medicine.json")
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    // fetching data for doctors information
    useEffect(() => {
        fetch("./doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    
    return (
        <div>
            <Container>
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

export default Services;