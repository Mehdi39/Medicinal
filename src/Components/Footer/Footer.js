import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
    const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />

    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row xs={2} lg={4}>
                    <div>
                        <h3 className="text-secondary text-start">Informations</h3>
                        <div>
                            <p className="text-start">Account</p>
                            <p className="text-start">About Us</p>
                            <p className="text-start">Privacy Policy</p>
                            <p className="text-start">Terms and Conditions</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-secondary text-start">Usefull Links</h3>
                        <div>
                            <p className="text-start">FAQ</p>
                            <p className="text-start">Addresses</p>
                            <p className="text-start">Medicines</p>
                            <p className="text-start">Special Offers</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-secondary text-start">Social</h3>
                        <div>
                            <p className="text-start">{facebook} Facebook</p>
                            <p className="text-start">{twitter} Twitter</p>
                            <p className="text-start">{instagram} Instagram</p>
                            <p className="text-start">{youtube} YouTube</p>
                            <p className="text-start">{linkedin} LinkedIn</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-secondary text-start">Download</h3>
                        <div className="text-start">
                            <img className="w-75" src="http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png" alt="" />
                        </div>
                    </div>
                </Row>
                <hr></hr>
                <p>© 2021 Medicinal. All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;