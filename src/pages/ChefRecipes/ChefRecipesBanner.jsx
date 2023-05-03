import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import ChefBannerCard from './ChefBannerCard';

const ChefRecipesBanner = ({ slide1, slide2, slide3, slide4, chef }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      bullets={false}
      cancelOnInteraction={false}
      interval={4000}
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
        <ChefBannerCard chef={chef}></ChefBannerCard>
      </div>
      <div
        style={{
          backgroundImage: `url(${slide2})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <ChefBannerCard chef={chef}></ChefBannerCard>
      </div>
      <div
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <ChefBannerCard chef={chef}></ChefBannerCard>
      </div>
      <div
        style={{
          backgroundImage: `url(${slide4})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <ChefBannerCard chef={chef}></ChefBannerCard>
      </div>
    </AutoplaySlider>
  );
};

export default ChefRecipesBanner;
