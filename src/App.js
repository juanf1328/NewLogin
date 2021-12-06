import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {

  state = {};

  componentDidMount = () => {
   
    axios.get('user').then(
        res => {
           this.setUser(res.data);
        },
        err => {
            console.log(err)
        }
    )
};

setUser = user => {
   this.setState({
      user: user
  });
};

          render(){
        return(
          <BrowserRouter>
          <div className="App">
             <Nav user={this.state.user} setUser={this.setUser}/>
                    
             <Routes>
                   <Route exact path="/components" element={<Home/> } />
                    <Route exact path="/components/Login" element={<Login/>} />
                   <Route exact path="/components/Register" element={<Register/>} />
              </Routes>
            </div>
          </BrowserRouter>
       
        );
   }
  }



