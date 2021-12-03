//import axios from "axios";
import { Component } from "react";

export default class Home extends Component{

   



    render() {

        if(this.props.user){
            return(
                <h2>Hi {this.props.user.first_name} {this.props.user.laste_name}</h2>
            )
        }

        return (
            <h2>Welcome</h2>
        )
    }
}