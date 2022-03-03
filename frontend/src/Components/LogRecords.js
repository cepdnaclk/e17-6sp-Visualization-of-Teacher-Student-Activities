import React, { Component } from 'react'
import axios from 'axios'

class LogRecords extends Component {

    state = {
        noOfrecords: null,
    }

    componentDidMount() {
        axios.get("http://localhost:3000/logrecords").then(res => {
            this.setState({ noOfrecords: res.data })
        })
    }

    render() {
        return <h2> No of Log Records: { this.state.noOfrecords } </h2>
    }
}

export default LogRecords