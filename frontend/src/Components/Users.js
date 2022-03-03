import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {

    state = {
        noOfUsers : null,
    }

    componentDidMount() {
        axios.get("http://localhost:3000/users").then(res => {
            this.setState({ noOfUsers : res.data})
        })
    }

    render() {
        return <h2> No of Users: {this.state.noOfUsers} </h2>
    }
}

export default Users