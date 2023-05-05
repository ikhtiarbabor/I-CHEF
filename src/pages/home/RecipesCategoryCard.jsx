import React, { useState } from 'react';
import './Css/RecipesCategory.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipesCategoryCard = ({ recipeData }) => {
  const { strMeal, rating } = recipeData;
  const [react, setReact] = useState(false);
  const handleReact = () => {
    toast('❤️ You React This Food');
    setReact(true);
  };

  return (
    <Col md={4}>
      <div className='wsk-cp-product'>
        <div className='wsk-cp-img'>
          <img src={recipeData?.strMealThumb} className='img-responsive' />
        </div>
        <div className='wsk-cp-text'>
          <div className='category'>
            <Link
              to={`/recipe/${recipeData?.chef_code}`}
              className='btn-home text-decoration-none text-white'
            >
              See This Category
            </Link>
          </div>
          <div className='title-product'>
            <h3>{strMeal}</h3>
            <Link
              className='link-color'
              to={`/recipes/how_to_cook/${recipeData?.chef_code}`}
            >
              Do you want to see the cooking method?
            </Link>
          </div>
          <div className='card-footer'>
            <div className='wcf-left'>
              <span className='price' style={{ color: '#FFD700' }}>
                <Rating
                  placeholderRating={rating || 4.3}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                  className='Icon fs-4'
                  readonly
                />
              </span>
            </div>
            <div className='wcf-right'>
              {!react ? (
                <a className='react-btn' onClick={handleReact}>
                  <i className='zmdi zmdi-shopping-basket'>
                    <FaHeart></FaHeart>
                  </i>
                </a>
              ) : (
                <a className='reacted-button'>
                  <i className='zmdi zmdi-shopping-basket'>
                    <FaHeart></FaHeart>
                  </i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RecipesCategoryCard;
