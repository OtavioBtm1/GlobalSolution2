import React from 'react';
import { BrowserRouter, Routes as RoutesDom, Route, Navigate } from 'react-router-dom';
import Home from '../Screens/Home/Index';
import Login from '../Screens/Login/Index';
import { isAuthenticated } from './Auth';
import Solutions from '../Screens/Solution/Index';
import Register from '../Screens/Register/Index';

const PrivateRoute = ({ element: Element, ...rest }) => {
  if (isAuthenticated()) {
    return <Navigate to="/home" />;
  }

  return <Element {...rest} />;
};

const Routes = () => (
  <BrowserRouter>
    <RoutesDom>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={Home} />} />
      <Route path="/solutions" element={<PrivateRoute element={Solutions} />} />
      <Route path="/register" element={<Register />} />
    </RoutesDom>
  </BrowserRouter>
);

export default Routes;