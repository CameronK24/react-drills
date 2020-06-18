import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleUserInput = (input) => {
    this.setState({text: input})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleUserInput(e.target.value)} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
