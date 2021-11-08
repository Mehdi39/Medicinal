import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const data = [
  {
    "id": "1",
    "product_name": "Napa",
    "type": "Tablet",
    "company_name": "Beximco Pharmaceuticals Ltd",
    "price": 0.80,
    "in_stock": 300,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn.osudpotro.com/medicine/ACETA-500MG-1611388047724.webp"
  },
  {
    "id": "2",
    "product_name": "Ace",
    "type": "Tablet",
    "company_name": "Square Pharmaceuticals Ltd",
    "price": 0.74,
    "in_stock": 100,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "http://www.biomed.com.bd/pharmacy/image/cache/ACE-PARACETAMOL-500-600x600.jpg"
  },
  {
    "id": "3",
    "product_name": "Fap",
    "type": "Tablet",
    "company_name": "Beacon Pharmaceuticals Ltd",
    "price": 0.74,
    "in_stock": 200,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn2.arogga.com/assets/img/product-placeholder.png"
  },
  {
    "id": "4",
    "product_name": "Reset",
    "type": "Tablet",
    "company_name": "Incepta Pharmaceuticals Ltd",
    "price": 0.72,
    "in_stock": 200,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn1.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvMTZcLzE2Mjk2LVJlc2V0LTUwMG1nLWR0OTcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Im91dHNpZGUifSwib3ZlcmxheVdpdGgiOnsiYnVja2V0IjoiYXJvZ2dhIiwia2V5IjoibWlzY1wvd20ucG5nIiwiYWxwaGEiOjkwfX19"
  },
  {
    "id": "5",
    "product_name": "Aceta",
    "type": "Tablet",
    "company_name": "Biopharma Ltd",
    "price": 0.74,
    "in_stock": 500,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn.osudpotro.com/medicine/ACETA-500MG-1611388047724.webp"
  },
  {
    "id": "6",
    "product_name": "Depyrin",
    "type": "Tablet",
    "company_name": "Delta Pharma Limited",
    "price": 0.74,
    "in_stock": 100,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn2.arogga.com/assets/img/product-placeholder.png"
  },
  {
    "id": "7",
    "product_name": "Paraxia ",
    "type": "Tablet",
    "company_name": "Pharmasia Ltd",
    "price": 0.72,
    "in_stock": 50,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn2.arogga.com/assets/img/product-placeholder.png"
  },
  {
    "id": "8",
    "product_name": "Fevac",
    "type": "Tablet",
    "company_name": "Orion Pharma Ltd",
    "price": 0.74,
    "in_stock": 90,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn2.arogga.com/assets/img/product-placeholder.png"
  },
  {
    "id": "9",
    "product_name": "Pamix",
    "type": "Tablet",
    "company_name": "Ziska Pharmaceuticals Ltd",
    "price": 0.74,
    "in_stock": 60,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn1.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvMTRcLzE0NDA5LVBhbWl4LTUwMC01MDBtZy10MGlzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJvdXRzaWRlIn0sIm92ZXJsYXlXaXRoIjp7ImJ1Y2tldCI6ImFyb2dnYSIsImtleSI6Im1pc2NcL3dtLnBuZyIsImFscGhhIjo5MH19fQ=="
  },
  {
    "id": "10",
    "product_name": "Fap",
    "type": "Tablet",
    "company_name": "Beacon Pharmaceuticals Ltd",
    "price": 0.74,
    "in_stock": 80,
    "generic": "Paracetamol",
    "mg": 500,
    "img": "https://cdn2.arogga.com/assets/img/product-placeholder.png"
  }
]

const MedicineDetails = () => {

  const { id } = useParams();
  const medicineData = data.find(data => data.id === id)

  return (
    <Container>
      <Card className="mb-5 border-0">
        <Card.Img variant="top" src={medicineData.img} />
        <Card.Body>
          <Card.Title>{medicineData.product_name}</Card.Title>
          <ListGroup className="list-group-flush text-start">
            <ListGroupItem>Type of: {medicineData.type}</ListGroupItem>
            <ListGroupItem>Company: {medicineData.company_name}</ListGroupItem>
            <ListGroupItem>Price: {medicineData.price} years</ListGroupItem>
            <ListGroupItem>In Stock: {medicineData.in_stock} years</ListGroupItem>
            <ListGroupItem>Generic: {medicineData.generic} years</ListGroupItem>
            <ListGroupItem>MG: {medicineData.mg} years</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
        <Link to='/home' className="d-flex flex-column justify-content-center"><button className='btn btn-success'>Add to Cart</button></Link>
    </Container>
  );
};

export default MedicineDetails;