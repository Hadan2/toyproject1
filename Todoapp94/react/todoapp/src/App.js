import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home'

function App() {
  const navigate = useNavigate();
  return (
    <div className='App'>
   
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/home1" element={<div>fc</div>} />
    </Routes>
    
    123
    <button onClick={() => {navigate('/home')}}>Home</button>

    </div>
    
  );
}

export default App;