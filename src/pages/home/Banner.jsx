import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Banner = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-server-ikhtiarbabor.vercel.app/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Container className='banner-container'>
      <AutoplaySlider
        play={true}
        bullets={false}
        cancelOnInteraction={false}
        interval={4000}
        organicArrows={false}
      >
        {recipes.map((recipe, i) => (
          <div
            className='banner-card w-50 bg-white text-center border rounded-top pt-5 px-6 mt-auto'
            style={{
              backgroundImage: `url(${recipe.strMealThumb})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <span className='text-color'>{recipe.strCategory}</span>
            <h4 className='pt-2 fs-bold'>{recipe?.strMeal}</h4>

            <p>{recipe.details}</p>

            <p style={{ color: '#FFD700' }}>
              <Rating
                placeholderRating={recipe.rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
                className='Icon fs-4'
                readonly
              />
              <span className='text-black ps-1'>
                {recipe?.rating || Math.floor(Math.random() * 4)}/5
              </span>
            </p>
            <p className='px-4 text-hover'>
              The doner is a Turkish creation of meat, often lamb, but not
              necessarily so, that is seasoned, stacked in a cone
            </p>
          </div>
        ))}
      </AutoplaySlider>
    </Container>
  );
};

export default Banner;
