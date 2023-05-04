import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageBanner from '../../shared/PageBanner';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { signInGoogle, setUser, loginUser, user } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  console.log(location);
  const backNav = useNavigate();
  const from = location.state || '/';
  console.log(from);
  console.log(location);
  const [error, setError] = useState('');
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleLoginGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;

        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        backNav(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <>
      {user ? (
        <Navigate to='/'></Navigate>
      ) : (
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
              onClick={handleLoginGoogle}
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
          <form action='' className='mx-auto w-25' onSubmit={handleLoginUser}>
            <label htmlFor='email'>Email</label>
            <p>
              <span className='position-absolute order-5'>
                <AiTwotoneMail></AiTwotoneMail>
              </span>
              <input
                type='email'
                id='email'
                name='email'
                className='w-100 border-0 border-bottom login-form px-4'
                required
              />
            </p>

            <label htmlFor='password'>Password</label>

            <p>
              <span className='position-absolute order-5'>
                <FaLock></FaLock>
              </span>
              <input
                type={!showPass ? 'password' : 'text'}
                name='password'
                id='password'
                className='w-100 border-0 border-bottom px-4'
                required
              />

              {!showPass ? (
                <span
                  className='position-absolute order-5'
                  onClick={handleShowPass}
                >
                  <FaEyeSlash></FaEyeSlash>
                </span>
              ) : (
                <span
                  className='position-absolute order-5'
                  onClick={handleShowPass}
                >
                  <FaEye></FaEye>
                </span>
              )}
            </p>
            <span className=' d-block text-end pb-2'>
              <Link>
                <small>Forget Password?</small>
              </Link>
            </span>
            <p>
              <small className='text-danger'>{error}</small>
            </p>
            <button className='btn-home text-center m-0 w-100'>Submit</button>
            <p className='pt-3 text-center'>
              <small>Don't have an account?</small>{' '}
              <Link to='/register' className='text-decoration-none'>
                <small className='fw-bold text-black'>Sign Up for free</small>
              </Link>
            </p>
          </form>
        </Container>
      )}
    </>
  );
};

export default Login;
