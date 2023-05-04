import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/banner/03.jpg';
import image2 from '../../assets/banner/02.jpg';

const BestRecipe = () => {
  return (
    <section
      className='section-gap pb-5'
     
    >
      <Container>
        <h2 className='text-center pb-4'>Best Food From Review</h2>
        <Row>
          <Row>
            <Col md={6}>
              <img src={image1} alt='' className='w-100' />
            </Col>
            <Col md={6}>
              <h3>Dal fry</h3>
              <p>
                Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a
                bowl or large jug, then whisk to a smooth batter. Set aside for
                30 mins to rest if you have time, or start cooking straight
                away.Set a medium frying pan or crêpe pan over a medium heat and
                carefully wipe it with some oiled kitchen paper. When hot, cook
                your pancakes for 1 min on each side until golden, keeping them
                warm in a low oven as you go.nServe with lemon wedges and sugar,
                or your favourite filling. Once cold, you can layer the pancakes
                between baking parchment, then wrap in cling film and freeze for
                up to 2 months.
              </p>
            </Col>
          </Row>
          <Row className='flex-row-flex-row-reverse'>
            <Col md={6} className='d-flex flex-column justify-content-center'>
              <h3>Big Mac</h3>
              <p>
                Wash and soak toor dal in approx. 3 cups of water, for at least
                one hours. Dal will be double in volume after soaking. Drain the
                water.Cook dal with 2-1/2 cups water and add salt, turmeric, on
                medium high heat, until soft in texture (approximately 30 mins)
                it should be like thick soup.In a frying pan, heat the ghee. Add
                cumin seeds, and mustard seeds. After the seeds crack, add bay
                leaves, green chili, ginger and chili powder. Stir for a few
                seconds.Add tomatoes, salt and sugar stir and cook until
                tomatoes are tender and mushy.Add cilantro and garam masala cook
                for about one minute.Pour the seasoning over dal mix it well and
                cook for another minute.Serve with Naan.
              </p>
            </Col>
            <Col md={6}>
              <img src={image2} alt='' className='w-100' />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default BestRecipe;
