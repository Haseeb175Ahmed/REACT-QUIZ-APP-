import React from "react"
import Result from "./result"
// import Loading from './loading.js'


export default class CreateQuiz extends React.Component {
    
    constructor(){
        super()
        this.state ={
            currentQuiz: "",
            allQuestion: [],
            counter: 0,
            correct: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    

    handleInput(e){
        this.setState({
            correct: this.state.correct + 1
        })
        console.log(this.state.correct)
    }

    componentDidMount(){
        fetch("https://opentdb.com/api.php?amount=10")
            .then(response => response.json())
            .then(response => {
                const {results} = response
                console.log(results)
                this.setState({
                    allQuestion: results
                })
            })
            
        }



    incrementCounter(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    sendResult(){
        this.props.finishQuiz()
    }
    
    render(){
        const {allQuestion, counter} = this.state
        console.log(allQuestion)
        return(

            
        
        allQuestion.length ? counter < allQuestion.length ?<div>
                <h1>Welcome To E-Testing</h1>
                <h4>QUIZ  # {counter}:  {allQuestion[counter].question}</h4>   
                <p>
                    { allQuestion[counter].incorrect_answers.map((index) =>{
                       return   <label>
                                    <input  value={allQuestion[counter].incorrect_answers} name="group" type="radio" />
                                   <b> <span key={counter}>{index}</span><br/></b>  
                                </label>
                    
                    })
                    }
                </p>        
                <p>
                <label>
                    <input onChange={this.handleInput} value={allQuestion[counter].correct_answer} name="group" type="radio" />
                   <b> <span key={counter}>{allQuestion[counter].correct_answer}</span></b>
                </label>
                </p>
                <button onClick={this.incrementCounter} style={{width: 100,height:50, marginTop: 20 ,backgroundColor:"Red"}} className="waves-effect waves-light btn-small " type="submit">Next</button>
            </div>
            : <div>
                    <Result correctAnswers={this.state.correct}/>
              </div>
                : 
                <img src="https://cdn-images-1.medium.com/max/1600/0*cWpsf9D3g346Va20.gif" />   
        )
        
    }
}