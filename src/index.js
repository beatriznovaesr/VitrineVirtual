import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import DevaCurl from './DevaCurl';
import Nutbuttercream from './Nutbuttercream';
import Curlycrush from './Curlycrush';
import Revelacachos from './Revelacachos';
import WidiCare from './Widicare';
import Africa from './Africa';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="devacurl" element={<DevaCurl />} />    
          <Route path='nutbuttercream' element={<Nutbuttercream/>}/>  
          <Route path='curlycrush' element={<Curlycrush/>}/>  
          <Route path='revelacachos' element={<Revelacachos/>}/> 
          <Route path='widicare' element={<WidiCare/>}/> 
          <Route path='africa' element={<Africa/>}/> 
      </Routes>
    </BrowserRouter>
);