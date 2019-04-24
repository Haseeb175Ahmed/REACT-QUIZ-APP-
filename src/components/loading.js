import React from "react"
import logo from './logo.svg';

export default class Loading extends React.Component {
    render(){
        return(
            <div>
               <img src = {logo}></img>
            </div>
        )
    }
}