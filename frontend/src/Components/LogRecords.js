import React, { Component } from 'react'
import axios from 'axios'

class LogRecords extends Component {

    state = {
        noOfrecords: 455238,
    }

    /*componentDidMount() {
        axios.get("http://localhost:3001/course/users").then(res => {
            console.log(res.data)
            this.setState({ noOfrecords: res.data.usercount })
        })
    }*/

    render() {
        return <h2> No of Log Records : { this.state.noOfrecords } </h2>
    }
}

export default LogRecords