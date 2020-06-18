import React, {Component} from 'react';

class UserInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (input) => {
        this.setState({username: input});
    }

    updatePassword = (input) => {
        this.setState({password: input});
    }

    alertInfo = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.updateUsername(e.target.value)} />
                <input onChange={(e) => this.updatePassword(e.target.value)} />
                <button onClick={() => this.alertInfo()}>Login</button>
            </div>
        )
    }
}

export default UserInput;