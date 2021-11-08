import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Article from './Article';

const Blog = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <Container>
            <Row className="my-5">
                {
                    articles.map(article => <Article key={article.id} article={article}></Article>)
                }
            </Row>
        </Container>
    );
};

export default Blog;