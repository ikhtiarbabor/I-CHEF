import React from 'react';
import { Container } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const OurReview = ({ allChef }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <section
      
    >
      <h2 className='text-center'>Our Recipe Reviews</h2>
      <Container>
        <AutoplaySlider
          play={true}
          bullets={false}
          cancelOnInteraction={false}
          interval={4000}
          organicArrows={false}
        >
          {allChef.map((chef, i) => (
            <div
              className='w-75 text-center border-0 py-5 px-6'
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: 'transparent',
              }}
            >
              <p
                style={{
                  width: '180px',
                  height: `180px`,
                  backgroundImage: `url(${chef.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                className='mx-auto rounded-circle'
              ></p>
              <h5 className='pt-2 fs-bold'>{chef.name}</h5>

              <p>{chef.details}</p>

              <p style={{ color: '#FFD700' }}>
                <Rating
                  placeholderRating={chef.rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                  className='Icon fs-4'
                  readonly
                />
              </p>
            </div>
          ))}
        </AutoplaySlider>
      </Container>
    </section>
  );
};

export default OurReview;
