import React, { Suspense, lazy } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import OurReview from './OurReview';
import CategoryLayout from '../../Layout/CategoryLayout';
import BestRecipe from './BestRecipe';
import Loader from '../loader/Loader';
const AllChef = lazy(() => import('./AllChef'));

const Home = () => {
  const allChef = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <CategoryLayout></CategoryLayout>
      <BestRecipe></BestRecipe>
      <Suspense fallback={<Loader></Loader>}>
        <AllChef allChef={allChef}></AllChef>
      </Suspense>
      <OurReview allChef={allChef}></OurReview>
    </>
  );
};

export default Home;
