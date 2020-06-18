import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['Luigi', 'Bambi', 'Beeter', "I'm", 'Your', 'Dad']
    }
  }

  render() {
    let formatList = this.state.list.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <h2>{formatList}</h2>
      </div>
    );
  }
  
}

export default App;
