import React, { useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FoodContext } from '../../Layout/CategoryLayout';

const RecipeCategory = () => {
  const { setCategory } = useContext(FoodContext);
  const handleCategory = (text) => {
    setCategory(text);
  };

  return (
    <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Breakfast')}
          >
            Breakfast
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Vegetarian')}
          >
            Vegetarian
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Lamb')}
          >
            Lamb
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Dessert')}
          >
            Dessert
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Side')}
          >
            Side
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Chicken')}
          >
            Chicken
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Seafood')}
          >
            Seafood
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Beef')}
          >
            Beef
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button
            className='bg-transparent border-0'
            onClick={() => handleCategory('Pork')}
          >
            Pork
          </button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default RecipeCategory;
