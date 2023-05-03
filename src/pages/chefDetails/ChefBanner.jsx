import React from 'react';

const ChefBanner = ({ chefDetails }) => {
  const { name, image } = chefDetails;
  return (
    <>
      <div
        className='text-white fw-bold d-flex align-items-center justify-content-center'
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          height: '500px',
          backgroundColor: 'rgba(0,0,0,.4)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <h1
          className='text-uppercase text-center'
          style={{ letterSpacing: '20px' }}
        >
          {name}
        </h1>
      </div>
    </>
  );
};

export default ChefBanner;
