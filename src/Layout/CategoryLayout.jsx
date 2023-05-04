import React, { createContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecipeCategory from '../pages/home/RecipeCategory';
import CategoryFood from '../pages/home/CategoryFood';
export const FoodContext = createContext([]);

const CategoryLayout = () => {
  const [category, setCategory] = useState('Vegetarian');
  const foodInfo = {
    category,
    setCategory,
  };
  return (
    <FoodContext.Provider value={foodInfo}>
      <Container>
        <h2 className='text-center'>Recipe Catagories</h2>
        <Row className='flex-column-reverse flex-md-row'>
          <Col md={9}>
            <CategoryFood></CategoryFood>
          </Col>
          <Col md={3} className='d-flex flex-column justify-content-center'>
            <h4 className='text-center align-items-baseline'>Categories</h4>
            <RecipeCategory></RecipeCategory>
          </Col>
        </Row>
      </Container>
    </FoodContext.Provider>
  );
};

export default CategoryLayout;
