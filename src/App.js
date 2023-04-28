// import logo from './logo.svg';
import './App.css';
import React from 'react';


import Home from "./Pages/Home";
import Categories from './Pages/Categories';

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Loginpage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import AfterLogin_home from './AfterLoginComponents/AfterLogin_home';
import Dashboard from './Admin/Dashboard';

import Users from './AdminPages/Users';

import { Route, Routes } from 'react-router-dom'


// import Navbar1 from './Components/Navbar1'
import Login from './Pages/Login';
// import CarouselPart from './Components/CarouselPart';
// import Footer from './Components/Footer';

import { useState,useEffect } from 'react';
import Dashboardhome from './AdminPages/Dashboardhome';
import Cart from './AfterLoginComponents/Cart';
import AdminLogin from './Pages/AdminLogin';






function App() {
  
  return (
    // <React.Fragment>
    <div className="App">
      {/* <Navbar1/> */}

      <div >
        <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/categories" element={<Categories/>} />
            {/* <Route path="/products" element={<Login/>} /> */}
            <Route path="/about" element={<About/>} /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="/admin" element={<AdminLogin/>} />
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
            <Route path="/dashboard" element={<Dashboardhome/>} />
            
        </Routes>
          
      </div>

   
        
      <div>
        <Routes>
            {/* <Route path='/signup' element={<Signuppage/>} /> */}
            <Route path='/login' element={<Loginpage/>} />
            <Route path="/welcome" element={<AfterLogin_home/>} />
           
        </Routes>
        <Routes>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
      
      
   
      

    </div>
    // </React.Fragment>
  );
}

export default App;
