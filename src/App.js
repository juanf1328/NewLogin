import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
      <div className="auth-wrapper">
           <div className="auth-inner">
            <Routes>
                 <Route exact path="/" component={Home } />
                 <Route exact path="/login" component={Login} />
                 <Route exact path="/register" component={Register} />
            </Routes>
          
            </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
