import React from 'react';
import './App.css';
//import helloImg from './assets/hello.jpg';
import { Signup }  from './components/Signup';
import { Login } from './components/Login';
import { Home }  from './components/home';
import NavBar from './components/Navbar';
import { Routes, Router, Route } from "react-router-dom"

function App() {
  return( 
      <Router>
       <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path=".components/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </Router>
  )
}

export default App;
