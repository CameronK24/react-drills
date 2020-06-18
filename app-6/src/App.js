import React, {Component} from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      taskList: [],      
    }
  }

  handleTask = (val) => {
    this.setState({task: val});
  }

  addTask = () => {
    this.setState({
      taskList: [...this.state.taskList, this.state.task],
      task: ''
    });

  }

  render() {
    // console.log(this.state.taskList);
    let list = this.state.taskList.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do list</h1>
        <input value={this.state.task} placeholder='Enter new task' onChange={(e) => this.handleTask(e.target.value)} />
        <button onClick={() => this.addTask()}>Add</button>
        {/* <Todo task={this.state.taskList}/> */}
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
