import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllChef = ({ allChef }) => {
  const [see, setSee] = useState(false);
  const handleButton = () => {
    setSee(!see);
  };
  return (
    <>
      <Container>
        <h2>Our Chef</h2>
        <Row className='justify-content-center'>
          {(!see ? allChef.slice(0, 6) : allChef).map((chef) => (
            <Col key={chef.id} md={4} className='mb-5'>
              <Card>
                <Card.Img variant='top' src={chef.image} />
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    {chef.details.length > 100 ? (
                      <>
                        {chef.details.slice(0, 100)}...
                        <Link to={`/chef/${chef.id}`}>Read More</Link>
                      </>
                    ) : (
                      chef.details
                    )}
                  </Card.Text>
                  <Link
                    className='text-decoration-none'
                    to={`/recipes/${chef.id}`}
                  >
                    <button className='btn-home'>See Recipe</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='d-flex justify-content-center'>
          {' '}
          <button className='btn-home' onClick={handleButton}>
            {!see ? 'See More' : 'See Less'}
          </button>
        </div>
      </Container>
    </>
  );
};

export default AllChef;
