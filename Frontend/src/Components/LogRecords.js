import React, { Component } from 'react'
import axios from 'axios'

class LogRecords extends Component {

    state = {
        noOfrecords: 0,
    }

    componentDidMount() {
        axios.get("http://localhost:3001/info/system").then(res => {
            
            this.setState({ noOfrecords : res.data.data[0].logRecords})
        })
    }

    render() {
        return <h2> No of Log Records : { this.state.noOfrecords } </h2>
    }
}

export default LogRecords