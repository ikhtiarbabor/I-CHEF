import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import slide1 from '../assets/banner/01.jpg';
import slide2 from '../assets/banner/02.jpg';
import slide3 from '../assets/banner/03.jpg';

const PageBanner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      play={true}
      bullets={false}
      cancelOnInteraction={false}
      interval={6000}
      buttons={false}
    >
      <div
        style={{
          backgroundImage: `url(${slide3})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <p className='text-white'>Login</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${slide2})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      ></div>
    </AutoplaySlider>
  );
};

export default PageBanner;
