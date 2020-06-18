import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['Luigi', 'Bambi', 'Beeter', "I'm", 'Your', 'Dad'],
      filteredList: ['Luigi', 'Bambi', 'Beeter', "I'm", 'Your', 'Dad']
    }
  }

  handleUserInput = (input) => {
    this.setState({filteredList: this.state.list});
    let filter = [];
    for (let x = 0; x < this.state.list.length; x++) {
      if (this.state.list[x].includes(input)) {
        filter.push(this.state.list[x]);
      }
    }
    // console.log(filter)
    this.setState({filteredList: filter});
  }

  render() {
    // this.state.filteredList = this.state.list;
    // console.log(this.state.filteredList);
    let formatList = this.state.filteredList.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.handleUserInput(e.target.value)}/>
        <h2>{formatList}</h2>
      </div>
    );
  }
  
}

export default App;
