// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Payment from './payment.js';
import Pay from './pay.js';
import Login from './Login.jsx'
import Register from './register.js'
import ContactUs from './contact.js';
import HttpCodes4 from './error.js';
import Navigation2 from './Nav.js';
import AboutUs from './aboutus.js';
import Services from './services.js';
import Blog from './blog.js';
import Gallery from './gallery.js';
import Apply from './apply.js'
import Submit from './submit.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation2 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/submit" element={<Submit />} />

        <Route path="/*" element={<HttpCodes4 />} />


      </Routes>
    </Router>
  );
}


export default App;
