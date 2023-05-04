import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import AllChef from './AllChef';
import OurReview from './OurReview';
import RecipeCategory from './RecipeCategory';
import CategoryLayout from '../../Layout/CategoryLayout';

const Home = () => {
  const allChef = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <CategoryLayout></CategoryLayout>
      <AllChef allChef={allChef}></AllChef>
      <OurReview allChef={allChef}></OurReview>
    </>
  );
};

export default Home;
