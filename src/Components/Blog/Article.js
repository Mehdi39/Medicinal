import React from 'react';
import { Col } from 'react-bootstrap';

const Article = (props) => {
    const { author, title, data, details, img } = props.article;

    return (
        <Col lg={6}>
            <img className="my-3" src={img} alt="" style={{ width: '32rem' }}/>
            <h2 className="text-start">{title}</h2>
            <h4 className="text-start">{author}</h4>
            <h6 className="text-start">Publish Date: {data}</h6>
            <p className="text-start">{details}</p>
        </Col>
    );
};

export default Article;