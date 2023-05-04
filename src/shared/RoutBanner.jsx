import React from 'react';

const RoutBanner = ({ children }) => {
  return (
    <section
      style={{
        backgroundImage: 'url(https://i.ibb.co/FHfhLhM/banner.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 0, 0,.5)',
        backgroundBlendMode: 'multiply',
        height: '300px',
      }}
      className='d-flex justify-content-center align-items-center text-white fw-bolder mb-5'
    >
      {children}
    </section>
  );
};

export default RoutBanner;
