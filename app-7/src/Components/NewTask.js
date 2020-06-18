import React, {Component} from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleUserInput = (input) => {
        this.setState({
            task: input
        })
    }

    handleAdd = (task) => {
        this.props.addTask(task);
        this.setState({task: ''});
    }

    render() {
        // console.log(this.state.task)
        return (
            <div>
                <input value={this.state.task} placeholder='Enter new task' onChange={(e) => this.handleUserInput(e.target.value)} />
                <button onClick={() => this.handleAdd(this.state.task)}>Add</button>
            </div>
        )
    }
}

export default NewTask;