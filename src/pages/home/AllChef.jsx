import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllChef = ({ allChef }) => {
  const [see, setSee] = useState(false);
  const handleButton = () => {
    setSee(!see);
  };
  return (
    <section
      className='section-gap'
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0,0,0,.5)',

        backgroundBlendMode: 'multiply',
        background: `url(${'https://webdesign-finder.com/kruton/wp-content/uploads/2018/11/background-form.jpg'})`,
      }}
    >
      <Container>
        <h2 className='text-center pb-3'>Our Chef</h2>
        <Row className='justify-content-center'>
          {(!see ? allChef.slice(0, 8) : allChef).map((chef) => (
            <Col key={chef.id} md={3} className='mb-5'>
              <Card>
                <Card.Img variant='top' src={chef.image} />
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text className='text-black'>
                    {chef.details.length > 100 ? (
                      <>
                        {chef.details.slice(0, 100)}...
                        <Link to={`/chef/${chef.id}`}>Read More</Link>
                      </>
                    ) : (
                      chef.details
                    )}
                  </Card.Text>
                  <Row>
                    <Col xs={8}>
                      <Link
                        className='text-decoration-none'
                        to={`/recipe/${chef.id}`}
                      >
                        <button className='btn-home'>See Recipe</button>
                      </Link>
                    </Col>
                    <Col xs={4}>
                      <span>{chef.experience}</span> <br />
                      <span>
                        {chef.rating}/5{' '}
                        <FaStar style={{ color: '#dd2476' }}></FaStar>
                      </span>
                    </Col>
                  </Row>
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
    </section>
  );
};

export default AllChef;
