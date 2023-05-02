import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container>
      <div className='text-center py-5 w-25 mx-auto'>
        {' '}
        <h1 className='fs-bold'>Join Us</h1>
        <p style={{ color: '#444' }}>Join us! please enter your details</p>
      </div>
      <form action='' className='mx-auto w-25'>
        <label htmlFor='email'>Name</label>
        <p>
          <input
            type='text'
            id='name'
            name='name'
            className='w-100 border-0 border-bottom login-form'
          />
        </p>
        <label htmlFor='photo-url'>Photo Url</label>
        <p>
          <input
            type='text'
            id='photo-url'
            name='photoUrl'
            className='w-100 border-0 border-bottom login-form'
          />
        </p>
        <label htmlFor='email'>Email</label>
        <p>
          <input
            type='email'
            id='email'
            name='email'
            className='w-100 border-0 border-bottom login-form'
          />
        </p>

        <label htmlFor='password'>Password</label>

        <p>
          <input
            type='password'
            name='password'
            id='password'
            className='w-100 border-0 border-bottom'
          />
        </p>
        <button className='btn-home text-center m-0 w-100'>Submit</button>
        <p className='pt-3 text-center'>
          <small>Already have an account?</small>{' '}
          <Link to='/login' className='text-decoration-none'>
            <small className='fw-bold text-black'>Login</small>
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;
