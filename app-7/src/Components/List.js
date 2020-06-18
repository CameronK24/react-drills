import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render() {
        // console.log(this.props.taskList);
        let list = this.props.taskList.map((element, index) => {
            return <Todo key={index} task={element} />
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default List;
