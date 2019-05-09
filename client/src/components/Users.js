import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const reqConfig = {
            headers: {
                authorization: token
            }
        }

        axios
        .get('http://localhost:7200/api/users', reqConfig)
        .then(res => {
            this.setState({users: res.data})
        })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div>
                    {this.state.users.map(user => {
                       return <h4>{user.username}</h4>
                    })}
                </div>
            </div>
        )
    }
}

export default Users;