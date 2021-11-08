import React from 'react';
import { Card, Container, Form, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const data = [
    {
        "id": "1",
        "first_name": "Dr Prashanta Kumar Ghosh",
        "experience": 43,
        "gender": "male",
        "details": "40 years. For last 20 years he is practising exclusively non invasive Cardiology in which he has vast experience of more than 3 lac echo's, thousands of Doppler, Trans oesophageal echo.",
        "team": "Cardiologist",
        "img": "https://apollodelhi.intpatient.com/img/prashanta.jpg"

    },
    {
        "id": "2",
        "first_name": "Dr Bhabha Nanda Das",
        "experience": 30,
        "gender": "male",
        "details": "Prior to this he was working as a Senior Consultant, Department of Cardio Thoracic Vascular Surgery (CTVS), All India Institute of Medical Sciences, New Delhi from 1984 to 1996.",
        "team": "Cardiologist",
        "img": "https://apollodelhi.intpatient.com/img/drBhabha.jpg"
    },
    {
        "id": "3",
        "first_name": "Dr Yash Gulati",
        "experience": 32,
        "gender": "male",
        "details": "Present Assignment : Senior Consultant Spine surgery & joint Replacement Apollo Hospital, New Delhi Advisor, Orthopaedics INDIA : Apollo Group Of Hospital (All Over India) Co-Ordinator, Orthopaedics Apollo Nova Hospitals Delhi, Kanpur, Jaipur Specialist Orthopaedics ABROAD :",
        "team": "Orthopaedic Surgeons",
        "img": "https://apollodelhi.intpatient.com/img/yash.jpg"

    },
    {
        "id": "4",
        "first_name": "Dr Prof Raju Vaishya",
        "experience": 32,
        "gender": "male",
        "details": "He did four years of specialized higher surgical training in joint replacement & arthroscopic surgery (especially of knee & hip) at various prestigious hospitals of U.K viz. Robert Jones & Agnes Hunt Orthopaedic Hospitals, Oswestry & Royal Liverpool Children’s Hospitals, UK",
        "team": "Orthopaedic Surgeons",
        "img": "https://apollodelhi.intpatient.com/img/drRaju.jpg"

    },
    {
        "id": "5",
        "first_name": "Dr A K Banerji",
        "experience": 50,
        "gender": "male",
        "details": "Fifty years of experience. Thirty years at AIIMS, New Delhi",
        "team": "Neurosurgeons",
        "img": "https://apollodelhi.intpatient.com/img/a_k.jpg"

    },
    {
        "id": "6",
        "first_name": "Dr V.P. Singh",
        "experience": 39,
        "gender": "male",
        "details": "Dr Singh is a senior member of the Comprehensive, multidisciplinary state of art facility of Apollo Cancer Institute. After his Post graduation from KGMC, Lucknow, he has worked as a Consultant in Surgical Oncology at the malignant diseases treatment centers of large teaching hospitals of the Armed Forces for 18 years. He has been further trained at The Tata Memorial Hospitals, Mumbai and the Royal Marsden Hospital, London. He has been awarded an International Union againstCancer (UICC) fellowship at Royal Prince Alfred Hospital, Sydney.",
        "team": "Neurosurgeons",
        "img": "https://apollodelhi.intpatient.com/img/drVP.jpg"

    }
]


const DoctorAppointment = () => {
    const { id } = useParams();
    const doctorData = data.find(data => data.id === id)

    return (

        <Container>
            <h1 className="text-center my-3">We Care, Allah(swt) Cure</h1>
            <hr />
            <Card className="mb-5 border-0">
                <Card.Img variant="top" src={doctorData.img} />
                <Card.Body>
                    <Card.Title>{doctorData.first_name}</Card.Title>
                    <ListGroup className="list-group-flush text-start">
                        <ListGroupItem>Team of: {doctorData.team}</ListGroupItem>
                        <ListGroupItem>Gender: {doctorData.gender}</ListGroupItem>
                        <ListGroupItem>Experience: {doctorData.experience} years</ListGroupItem>
                        <ListGroupItem>Experience: {doctorData.details} years</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            <>
                <h2>Select Time</h2>
                <Form.Select size="lg">
                    <option>8.00am</option>
                    <option>8:30am</option>
                    <option>9:00am</option>
                    <option>9:30am</option>
                </Form.Select>
                <br />
                <h2>Select Day</h2>
                <Form.Select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                </Form.Select>
                <br />
                <Link to='/home'><button className='btn btn-success text-center'>Confirm Appointment</button></Link>
            </>
        </Container>
    );
};

export default DoctorAppointment;