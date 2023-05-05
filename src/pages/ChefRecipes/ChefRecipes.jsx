import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ChefRecipesBanner from './ChefRecipesBanner';

const ChefRecipes = () => {
  const [chef, setChef] = useState([]);
  const chefRecipes = useLoaderData();
  const id = chefRecipes?.[0]?.chef_code;
  useEffect(() => {
    fetch(`https://assignment-10-server-ikhtiarbabor.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  const slide1 = chefRecipes[0].strMealThumb;
  const slide2 = chefRecipes[1].strMealThumb;
  const slide3 = chefRecipes[2].strMealThumb;
  const slide4 = chefRecipes[3].strMealThumb;
  return (
    <>
      <ChefRecipesBanner
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}
        chef={chef}
      ></ChefRecipesBanner>
      <Container className='mt-5'>
        <h2 className='text-center mb-5'>See My Recipes</h2>
        <Row xs='flex-row-reverse'>
          {chefRecipes.map((rec, i) => {
            if (i % 2 === 0) {
              return (
                <>
                  <Col md={6} className='mb-4'>
                    <img
                      className='img-fluid rounded'
                      src={rec.strMealThumb}
                      alt=''
                    />
                  </Col>
                  <Col
                    md={6}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <div>
                      <h4>{rec.strMeal}</h4>
                      <p>{rec.strInstructions}</p>
                      <Link
                        to={`/recipes/how_to_cook/${rec.chef_code}`}
                        className='text-decoration-none'
                      >
                        <button className='btn-grad'>How To Cook Recipe</button>
                      </Link>
                    </div>
                  </Col>
                </>
              );
            } else {
              return (
                <>
                  <Col
                    md={6}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <div>
                      <h4>{rec.strMeal}</h4>
                      <p>{rec.strInstructions}</p>
                      <Link
                        to={`/recipes/how_to_cook/${rec.chef_code}`}
                        className='text-decoration-none'
                      >
                        <button className='btn-grad'>How To Cook Recipe</button>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img className='w-100' src={rec.strMealThumb} alt='' />
                  </Col>
                </>
              );
            }
          })}
        </Row>
      </Container>
    </>
  );
};

export default ChefRecipes;
