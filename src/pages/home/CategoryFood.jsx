import React, { useContext } from 'react';
import { FoodContext } from '../../Layout/CategoryLayout';
import FetchData from '../../Fetch data/FetchData';
import RecipesCategoryCard from './RecipesCategoryCard';
import { Row } from 'react-bootstrap';

const CategoryFood = () => {
  const { category } = useContext(FoodContext);
  const filterData = FetchData(
    `https://assignment-10-server-kappa-six.vercel.app/recipes/category/${category}`,
    category
  );
  console.log(
    `https://assignment-10-server-kappa-six.vercel.app/recipes/category/${category}`
  );
  console.log(filterData);
  return (
    <Row>
      {filterData?.slice(0, 3).map((fD) => (
        <RecipesCategoryCard
          recipeData={fD}
          key={fD.idMeal}
        ></RecipesCategoryCard>
      ))}
      ;
    </Row>
  );
};

export default CategoryFood;
