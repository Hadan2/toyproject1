import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'



function App() {
  const navigate = useNavigate();
  return (
    <div className='App'>
   
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/" element={<Login></Login>} />
    </Routes>
  
    <button onClick={() => {
      navigate('/home')
    }}> btn </button>

     
     
    </div>

    
    
  );
}

export default App;
