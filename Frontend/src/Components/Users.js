import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {

    state = {
        noOfUsers : 0,
    }

    componentDidMount() {
        axios.get("http://localhost:3001/info/system").then(res => {
            
            this.setState({ noOfUsers : res.data.data[0].users})
        })
    }

    render() {
        return <h2> No of Users : {this.state.noOfUsers} </h2>
    }
}

export default Users