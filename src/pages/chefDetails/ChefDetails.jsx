import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const { details, rating, restaurant, name, id, experience, recipes } =
    chefDetails;

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
                <p style={{ color: '#FFD700' }}>
                  <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                    className='Icon fs-4'
                    readonly
                  />
                </p>
              </Col>
              <Col md={6}>Experience</Col>
              <Col md={6}>{experience}</Col>
              <Col md={6}>Recipes</Col>
              <Col md={6}>{recipes}</Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChefDetails;
