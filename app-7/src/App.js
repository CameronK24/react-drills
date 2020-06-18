import React, { Component } from 'react';
import NewTask from './Components/NewTask'
import List from './Components/List'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      taskList: []
    }
  }

  addTask = (task) => {
    this.setState({
      taskList: [...this.state.taskList, task]
    });
  }

  render() {    
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={this.addTask} />
        <List taskList={this.state.taskList} />       
      </div>
    );
  }
}

export default App;
