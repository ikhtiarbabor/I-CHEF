import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-5'>
      <Container>
        <Row>
          <Col md={6} className='px-5 d-flex flex-column'>
            <Link to='/' className='text-decoration-none p-0'>
              <span className='foot_logo'>iChef</span>
            </Link>
            <p className='text-center'>
              We are best Food recipe provider . Our chefs ar world top chef.
              Their Foods are So good. You can Order from our website.Please
              read our Review and choose Chef and recipe
            </p>
            <div className='ps-5'>
              <p>
                <span className='pe-3'>
                  <FaLocationArrow></FaLocationArrow>{' '}
                </span>
                <span>828 Curtis Ferry, New York, USA</span>
              </p>
              <p>
                <span className='pe-3'>
                  <FaPhoneAlt></FaPhoneAlt>{' '}
                </span>
                <span>+8 (800) 238 3597</span>
              </p>
              <p>
                <span className='pe-3'>
                  <AiFillMail></AiFillMail>{' '}
                </span>
                <span>ichef@chef.com</span>
              </p>
              <p>
                <span className='pe-3'>
                  <FaGlobe></FaGlobe>
                </span>
                <span>www.iChef.com</span>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <p className='subscribe'>SUBSCRIBE</p>
            <p>
              Enter Email here to be updated. We promise not to send you spam!
            </p>
            <input
              type='email'
              placeholder='Enter Your Email'
              className='p-2 w-50 ms-2'
            />
            <button className='btn-home subscribe-btn'>Subscribe</button>
          </Col>
        </Row>
        <p className='text-center pt-5'>
          &copy; iChef 2023 | Created with by Ikhtiar
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
