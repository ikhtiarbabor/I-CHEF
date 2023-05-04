import React from 'react';
import RoutBanner from '../../shared/RoutBanner';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <div>
      <RoutBanner>
        <h1 className='text-center'>Blog</h1>
      </RoutBanner>
      <Container>
        <div>
          <h2>Differences between uncontrolled and controlled components.</h2>
          <h6 className='bold'>Controlled Components:</h6>
          <p>
            Controlled components are software components that are explicitly
            managed by the application code, typically through state management
            mechanisms like props and state in React, or by other means such as
            event listeners or data binding. These components are typically used
            in a declarative programming style where the application code
            specifies how the component should behave in response to user
            interactions and other events.
          </p>
          <h6 className='bold'>Uncontrolled Components:</h6>
          <p>
            Uncontrolled components, on the other hand, are those components
            that are managed by the browser or by a third-party library, and are
            not controlled by the application code. Examples of uncontrolled
            components include form inputs like text fields, checkboxes, and
            radio buttons. These components are typically managed by the
            browser, and their state is updated automatically as the user
            interacts with them.
          </p>
          <h2>Differences between Node.js and Express.js</h2>
          <h6 className='bold'>Node.js:</h6>
          <p>
            Node.js is a JavaScript runtime environment that allows developers
            to write server-side applications using JavaScript. It provides a
            non-blocking I/O model that makes it highly scalable and efficient
            for building real-time applications. Node.js is built on top of the
            V8 JavaScript engine, which is the same engine used by Google Chrome
            to execute JavaScript code. Node.js provides a rich set of built-in
            modules and APIs for file system operations, network programming,
            and more.
          </p>
          <h6 className='bold'>Express.js:</h6>
          <p>
            Express.js is a lightweight and flexible web application framework
            built on top of Node.js. It provides a set of tools and features for
            building web applications and APIs, such as routing, middleware,
            template engines, and more. Express.js is highly extensible and
            allows developers to add additional functionality through
            third-party middleware and plugins.
          </p>
          <h2>What is a custom hook, and why will you create a custom hook?</h2>
          <p>
            A custom hook allows you to abstract complex logic into a simple and
            reusable function, which can be used across multiple components
            without duplicating code. By doing so, you can improve the
            modularity, reusability, and maintainability of your codebase.
          </p>
          <h2>How to validate React props using PropTypes?</h2>
          <p>
            {' '}
            To validate React props using PropTypes, you can follow these steps
            <ol className='list-decimal mt-2'>
              <li>
                Install the PropTypes library by running npm install prop-types
                in your project directory.
              </li>
              <li className='mt-2'>
                Import the PropTypes library at the top of your component file
                like this: import PropTypes from 'prop-types';
              </li>
              <li className='mt-2'>
                Define the propTypes object within your component class and
                specify the type and validation rules for each prop.
              </li>
            </ol>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
