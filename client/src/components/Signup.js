import React from "react";
import axios from 'axios';

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        department: ''
    }

    handleInputChange = event => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()
        

        axios
        .post('http://localhost:7200/api/register', this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
        })
        .catch(err => {
            console.log(err)
        })

        this.props.history.push('/users')
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor='username'>
                                <input type='text' name='username' id='username' value={this.state.username} onChange={this.handleInputChange} />
                            </label>
                        </div>

                        <div>
                            <label htmlFor='password'>
                                <input type='password'  id='password' name='password' value={this.state.password} onChange={this.handleInputChange} />
                            </label>
                        </div>

                        <div>
                            <label htmlFor='department'>
                                <input type='text'  id='department' name='department' value={this.state.department} onChange={this.handleInputChange} />
                            </label>
                        </div>
                        <button type='submit'>Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;