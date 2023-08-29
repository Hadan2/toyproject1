import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home'
import Login from './pages/Login'
import Add from './pages/Add'



function App() {
  const navigate = useNavigate();
  let params = useParams();
  const [data1, setData1] = useState([]);

    
  
       

  return (
    <div className='App'>
   
    <Routes>
      <Route path="/home" element={<Home data1={data1} setData1={setData1}></Home>} />
      <Route path="/" element={<Login></Login>} />
      <Route path="/add" element={<Add></Add>} />
      <Route path="/params.title" element={<Home></Home>}></Route>
    </Routes>

    {
      console.log(data1)
    }
  
  
     
    </div>

    
    
  );
}

export default App;
