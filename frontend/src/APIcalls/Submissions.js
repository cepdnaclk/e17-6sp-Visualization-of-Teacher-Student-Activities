import axios from 'axios';

const getSubmissionNames = () => {

    let sub_name = "Assignment: Lab 01 -Submission for Lab Exercise - Group AB";

    axios.get(`http://localhost:3001/submissions/summary/plot?subName=${sub_name}`)
        .then(res => {
            console.log(res.data)
        }).catch((e) => {
            alert(e.res.data.error)
        })


}

export { getSubmissionNames }