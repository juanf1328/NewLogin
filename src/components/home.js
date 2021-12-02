import axios from "axios";
import { Component } from "react";

export default class Home extends Component{

    componentDidMount() {
        axios.get('user').then(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        )
    }



    render() {
        return (
            <h2>Welcome</h2>
        )
    }
}