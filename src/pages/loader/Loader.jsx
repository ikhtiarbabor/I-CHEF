import React from 'react';
import { Container } from 'react-bootstrap';
import preloader from '../../assets/preloader.gif';

const Loader = () => {
  return (
    <Container className='mx-auto'>
      <div className='w-50 mx-auto h-100 d-flex align-items-center justify-content-center'>
        <img src={preloader} alt='' />
      </div>
    </Container>
  );
};

export default Loader;
