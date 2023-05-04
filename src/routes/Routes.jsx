import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import Home from '../pages/home/Home';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/login/Login';
import Blog from '../pages/blog/Blog';
// import ChefDetails from '../pages/chefDetails/ChefDetails';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import Register from '../pages/register/Register';
import PrivateRoute from './PrivateRoute';
import RecipeCategory from '../pages/home/RecipeCategory';
import RecipesCategoryCard from '../pages/home/RecipesCategoryCard';
import CategoryFood from '../pages/home/CategoryFood';
import CategoryLayout from '../Layout/CategoryLayout';
import HowToCook from '../pages/HowToCook/HowToCook';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../pages/loader/Loader';
const Home = lazy(() => import('../pages/home/Home.jsx'));
const ChefDetails = lazy(() => import('../pages/chefDetails/ChefDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Home></Home>
          </Suspense>
        ),
        loader: () =>
          fetch('https://assignment-10-server-ikhtiarbabor.vercel.app/'),
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
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <ChefDetails></ChefDetails>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ikhtiarbabor.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: '/recipe/:chef_code',
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ikhtiarbabor.vercel.app/recipes/${params.chef_code}`
          ),
      },
      {
        path: '/recipes/how_to_cook/:id',
        element: (
          <PrivateRoute>
            <HowToCook></HowToCook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ikhtiarbabor.vercel.app/recipe/cooking_method/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
