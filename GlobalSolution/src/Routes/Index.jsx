import React from 'react';
import { BrowserRouter, Routes as RoutesDom, Route, Navigate } from 'react-router-dom';
import Home from '../screens/Home/Index';
import Login from '../screens/Login';
import { isAuthenticated } from './Auth';
import Solutions from '../screens/Solution';
import Register from '../screens/Register';

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