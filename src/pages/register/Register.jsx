import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [err, setErr] = useState('');
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleShowConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;
    const numberValid = /[0-9]/g.test(password);
    const capitalLetter = /[A-Z]/g.test(password);
    const specialChar = /[@#$%^&+!=]/g.test(password);
    let okPassword;
    if (password !== confirmPass) {
      return setErr("Password Doesn't match");
    } else if (!numberValid) {
      return setErr('You Must Add A number');
    } else if (!capitalLetter) {
      return setErr('You Must Add A capital letter');
    } else if (!specialChar) {
      return setErr('You Must Add A special character');
    } else {
      okPassword = password;
      setErr('');
    }

    createUser(email, okPassword)
      .then((result) => {
        result.user.displayName = name;
        result.user.photoURL = photoUrl;
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <div className='text-center py-5 w-25 mx-auto'>
        {' '}
        <h1 className='fs-bold'>Join Us</h1>
        <p style={{ color: '#444' }}>Join us! please enter your details</p>
      </div>
      <form action='' className='mx-auto w-25' onSubmit={handleSignUp}>
        <label htmlFor='email'>Name</label>
        <p>
          <input
            type='text'
            id='name'
            name='name'
            className='w-100 border-0 border-bottom login-form'
            required
          />
        </p>
        <label htmlFor='photo-url'>Photo Url</label>
        <p>
          <input
            type='text'
            id='photoUrl'
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
        <label htmlFor='password'>Confirm Password</label>
        <p>
          <span className='position-absolute order-5'>
            <FaLock></FaLock>
          </span>
          <input
            type={!showConfirmPass ? 'password' : 'text'}
            name='confirmPass'
            className='w-100 border-0 border-bottom px-4'
            required
          />

          {!showConfirmPass ? (
            <span
              className='position-absolute order-5'
              onClick={handleShowConfirmPass}
            >
              <FaEyeSlash></FaEyeSlash>
            </span>
          ) : (
            <span
              className='position-absolute order-5'
              onClick={handleShowConfirmPass}
            >
              <FaEye></FaEye>
            </span>
          )}
        </p>
        <p className='text-danger'>
          <small>{err}</small>
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
