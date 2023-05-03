import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/login/Login';
import Blog from '../pages/blog/Blog';
import ChefDetails from '../pages/chefDetails/ChefDetails';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import Register from '../pages/register/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:2000/'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      { path: '/register', element: <Register></Register> },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: 'chef/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:2000/chef/${params.id}`),
      },
      {
        path: '/recipes/:chef_code',
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2000/recipes/${params.chef_code}`),
      },
    ],
  },
]);

export default router;
