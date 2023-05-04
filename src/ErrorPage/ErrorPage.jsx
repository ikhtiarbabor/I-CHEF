import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const handelError = useRouteError('');
  const { error, status } = handelError;
  return (
    <section className='h-screen text-center mt-8'>
      <img
        src='https://i.ibb.co/253S2LC/image-removebg-preview.png'
        alt=''
        className='h-3/6 mx-auto'
      />
      <h2 className='text-7xl font-extrabold text-gray-400'>{status}</h2>
      <h2 className='mb-5'>{error?.message}</h2>
      <Link
        to='/'
        className='btn-grad mx-auto text-decoration-none'
        style={{ maxWidth: '210px' }}
      >
        {' '}
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
