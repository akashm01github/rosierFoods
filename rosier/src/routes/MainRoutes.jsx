// src/MainRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './../ProtectedRoute.jsx';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default MainRoutes;