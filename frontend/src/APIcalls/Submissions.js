import axios from 'axios';

async function getSubmissionPlotDetails() {
    let sub_name = "Assignment: Lab 01 -Submission for Lab Exercise - Group AB";
    try {
        let res = await axios({
            url: `http://localhost:3001/submissions/summary/plot?subName=${sub_name}`,
            method: 'get'
        })
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
}


export { getSubmissionPlotDetails }