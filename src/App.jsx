import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BakerCatlog from './pages/BakerCatlog';
import AboutUs from './pages/AboutUs';
import ShopNow from './pages/ShopNow';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bakercatlog" element={<BakerCatlog />} /> 
        <Route path="about" element={<AboutUs />} />
        <Route path="shopnow" element={<ShopNow />} />
        <Route path='services' element={<Services />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
