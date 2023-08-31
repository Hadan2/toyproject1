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
  const [user, setUser] = useState('');

/*   useEffect(() => {
    
    if (!user) {
      alert('you not logined')
      navigate('/'); // 로그인 페이지로 리다이렉션
    }
  }, [user, navigate]); */
  
       

  return (

    <div className='App'>
    {console.log(user)}

    <Routes>
      <Route path="/home" element={<Home data1={data1} setData1={setData1} user={user} setUser={setUser} ></Home>} />
      <Route path="/" element={<Login user={user} setUser={setUser} ></Login>} />
      <Route path="/add" element={<Add user={user}></Add>} />
      <Route path="/detail/:id" element={<Detail data1={data1}></Detail>}></Route>
    </Routes>

    
  
     
    </div>

    
    
  );
}

export default App;
