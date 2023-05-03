import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../pages/loader/Loader';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to='/login' state={location?.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoute;
