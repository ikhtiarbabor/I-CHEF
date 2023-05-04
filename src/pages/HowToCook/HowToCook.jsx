import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import RoutBanner from '../../shared/RoutBanner';

const HowToCook = () => {
  const chef = useLoaderData();
  console.log(chef);
  const {
    strMeal,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strInstructions,
    strArea,
    strTags,
    strCategory,
    rating,
  } = chef;
  return (
    <section>
      <RoutBanner>
        <h1 className='text-center'>{strMeal}</h1>
      </RoutBanner>
      <Container>
        <h3>Do you want to know how to cook this recipe?</h3>

        <Row>
          <Col md={6}>
            <img src={strMealThumb} alt='' className='rounded w-100' />
          </Col>
          <Col md={6}>
            <h5>Ingredients</h5>
            <Row>
              <Col xs={6}>
                <ul>
                  <li>{strIngredient1}</li>
                  <li>{strIngredient2}</li>
                  <li>{strIngredient3}</li>
                  <li>{strIngredient4}</li>
                  <li>{strIngredient5}</li>
                  <li>{strIngredient6}</li>
                  <li>{strIngredient7}</li>
                  <li>{strIngredient8}</li>
                  <li>{strIngredient9}</li>
                  <li>{strIngredient10}</li>
                  <li>{strIngredient11}</li>
                  <li>{strIngredient12}</li>
                </ul>
                <h5>Measure</h5>
                <ul>
                  <li>{strMeasure1}</li>
                  <li>{strMeasure2}</li>
                  <li>{strMeasure3}</li>
                  <li>{strMeasure4}</li>
                  <li>{strMeasure5}</li>
                  <li>{strMeasure6}</li>
                  <li>{strMeasure7}</li>
                  <li>{strMeasure8}</li>
                  <li>{strMeasure9}</li>
                </ul>
              </Col>
              <Col xs={6}>
                <h5>Details</h5>
                <Row>
                  <Col xs={6}>Name:</Col>
                  <Col xs={6}>{strMeal}</Col>
                  <Col xs={6}>Country:</Col>
                  <Col xs={6}>{strArea}</Col>
                  <Col xs={6}>Tags:</Col>
                  <Col xs={6}>{strTags}</Col>
                  <Col xs={6}>Category:</Col>
                  <Col xs={6}>{strCategory}</Col>
                  <Col xs={6}>Rating</Col>
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
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <h5>Cook Method</h5>
            <p>{strInstructions}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowToCook;
