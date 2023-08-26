import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Add from './pages/Add'



function App() {
  const navigate = useNavigate();


  return (
    <div className='App'>
   
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/" element={<Login></Login>} />
      <Route path="/add" element={<Add></Add>} />
    </Routes>

  
  
  
     
    </div>

    
    
  );
}

export default App;
