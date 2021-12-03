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
            this.setState({
                user: res.data
            });
        },
        err => {
            console.log(err)
        }
    )
};

          render(){
        return(
          <BrowserRouter>
          <div className="App">
             <Nav user={this.state.user}/>
                    
             <Routes>
                   <Route path="/" element={() => <Home user={this.state.user} /> } />
                  <Route path="/login" element={Login} />
                   <Route path="/register" element={Register} />
              </Routes>
            </div>
          </BrowserRouter>
       
        );
   }
  }



