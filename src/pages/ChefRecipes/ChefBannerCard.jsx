import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefBannerCard = ({chef}) => {
    return (
        <Card className='w-50 mx-auto'>
          <Row>
            <Col md={6}>
              <Card.Img variant='top' src={chef?.image} />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>{chef?.name}</Card.Title>

                <Card.Text>
                  {chef?.details?.length > 100 ? (
                    <>{chef?.details?.slice(0, 100)}</>
                  ) : (
                    chef.details
                  )}
                </Card.Text>
                <Link className='text-decoration-none' to={`/chef/${chef.id}`}>
                  <button className='btn-home'>Read More</button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
    );
};

export default ChefBannerCard;