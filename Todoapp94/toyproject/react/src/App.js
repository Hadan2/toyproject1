import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home'
import Login from './pages/Login'
import Add from './pages/Add'
import MyNavbar from './pages/navbar';
import Detail from './pages/detail';


function App() {
  const navigate = useNavigate();
  const [data1, setData1] = useState([]);

    
  
       

  return (

    <div className='App'>
   

    <Routes>
      <Route path="/home" element={<Home data1={data1} setData1={setData1}></Home>} />
      <Route path="/" element={<Login></Login>} />
      <Route path="/add" element={<Add></Add>} />
      <Route path="/detail/:id" element={<Detail data1={data1}></Detail>}></Route>
    </Routes>

    
  
     
    </div>

    
    
  );
}

export default App;
