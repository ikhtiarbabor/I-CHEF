import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import AllChef from './AllChef';

const Home = () => {
  const allChef = useLoaderData();
  console.log(allChef);
  return (
    <>
      <Banner></Banner>
      <AllChef allChef={allChef}></AllChef>
    </>
  );
};

export default Home;
