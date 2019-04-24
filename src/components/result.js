import React from "react"

export default class Result extends React.Component {
    render(){
        return(
           
            <h1>Congragulations........Your Result is: {this.props.correctAnswers}</h1>
            
        )
    }
}