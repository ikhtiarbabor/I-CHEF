import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageBanner from '../../shared/PageBanner';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Container className='mx-auto flex justify-content-center'>
        <div className='text-center py-5 w-25 mx-auto'>
          <h1>Wel Come Back</h1>
          <p style={{ color: '#444' }}>
            Welcome back! please enter your details
          </p>
          <button
            style={{
              background: 'transparent',
              color: 'black',
              border: '1px solid #444',
            }}
            className='rounded text-capitalize py-1 w-100 mt-3'
          >
            <FcGoogle className='fs-5'></FcGoogle> Log in with Google
          </button>
          <button
            style={{
              background: 'transparent',
              color: 'black',
              border: '1px solid #444',
            }}
            className='rounded text-capitalize py-1 w-100 mt-3'
          >
            <FaGithub className='fs-5'></FaGithub>{' '}
            <span className='text-capitalize'>Log in with Google</span>
          </button>
        </div>
        <form action='' className='mx-auto w-25'>
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
          <span className=' d-block text-end pb-2'>
            <Link>
              <small>Forget Password?</small>
            </Link>
          </span>
          <button className='btn-home text-center m-0 w-100'>Submit</button>
          <p className='pt-3 text-center'>
            <small>Don't have an account?</small>{' '}
            <Link to='/register' className='text-decoration-none'>
              <small className='fw-bold text-black'>Sign Up for free</small>
            </Link>
          </p>
        </form>
      </Container>
    </>
  );
};

export default Login;
