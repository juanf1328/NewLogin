import { Component } from "react";
import {Link, Outlet} from "react-router-dom";

export default class Nav extends Component{

  handleLogout = () => {
      localStorage.clear();
      this.props.setUser(null);
  };


    render() {

      let buttons;

      if(this.props.user){
        buttons = (  <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={'/'} onClick={this.handleLogout} className="nav-link"> Logout</Link>
        </li>
      </ul>)

      }else{
        buttons = (  <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to='/components/Login' className="nav-link"> Login</Link>
        </li>
        <li className="nav-item">
           <Link to={'/components/Register'} className="nav-link">Sign Up</Link>
        </li>
      </ul>)

      }

        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/components'}>Home</Link>
                <div className="collapse navbar-collapse">
                {buttons}
                </div>
               </div>
               <Outlet />
          </nav>
        )
    }
}