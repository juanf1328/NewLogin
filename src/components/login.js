import axios from "axios";
import { React, Component } from "react";
import { Navigate  } from "react-router-dom";

export default class Login extends Component{

    handleSubmit = e => {
        e.preventDefault();
    

    const data = {
        email: this.email,
        password: this.password
    };
    


    axios.post('login', data)
    .then(res => {
       localStorage.setItem('token', res.data.token);
       this.setState({
           loggedIn: true
       });
       this.props.setUser(res.data.user);
    })
    .catch(err => {
        console.log(err)
    })

};

    render() {
        if(this.state.loggedIn){
            return <Navigate to='/components' />
        }
        return (
            <form onSubmit={this.handleSubmit}>
  
                <h3>Login</h3>
              
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
                </div>
               
                <button className="btn btn-primary btn-block">Login</button>
            </form>
        )
    }
}