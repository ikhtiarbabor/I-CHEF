import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import { Rating } from '@smastrom/react-rating';

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const { details, rating, restaurant, name, id } = chefDetails;
  return (
    <>
      <ChefBanner chefDetails={chefDetails}></ChefBanner>
      <Container className='mt-4'>
        <Row>
          <h1 className='text-center'>Details</h1>
          <Col md={6}>
            <div>
              <p>{details}</p>
            </div>
            <div>
              <h5>Restaurant</h5>
              <ul>
                {restaurant?.map((r, i) => (
                  <li key={id + i}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className='d-flex flex-wrap'>
              <Col xs={6}>
                <p>Name</p>
              </Col>
              <Col xs={6}>{name}</Col>
              <Col xs={6}>Ratings</Col>
              <Col xs={6}>
                <Rating
                  style={{ maxWidth: 20 }}
                  value={3}
                  orientation='horizontal'
                  readOnly
                />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChefDetails;
