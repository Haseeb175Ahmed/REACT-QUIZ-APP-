import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DenseAppBar from './components/AppBar.js'
import CreateQuiz from "./components/createQuiz" 
import Button from '@material-ui/core/Button';
import { blueGrey } from '@material-ui/core/colors';

class App extends Component {
  constructor(){
    super()
    this.state ={
      isLoggedIn: true,
      started: false

    }
    this.startQuiz = this.startQuiz.bind(this)
  }

  static getDerivedStateFromProps(){
    return {user: true}
  }

  finishQuiz(correct){
    this.setState({
      finished: true,
      started: false,
      result: correct
    })
  }


  startQuiz(){
    this.setState({
      started: true
    })
  }

  
  render() {
    const {started, finished, result} = this.state
    return (
      <div className="App">
        <DenseAppBar 
          
        />
        {!started && <button  onClick={this.startQuiz} style={{width: 100,height:50, marginTop: 20,backgroundColor:"Blue"}}  type="submit" >Start Quiz</button>}
        <Button/>
        {started &&
          <CreateQuiz />
        }

        {}
        
      </div>
    );
  }
}

export default App;
