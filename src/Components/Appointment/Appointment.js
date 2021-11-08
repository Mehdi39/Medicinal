import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Home/Doctor';

const Appointment = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("./doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <Row>
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Appointment;