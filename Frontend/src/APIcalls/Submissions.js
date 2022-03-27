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

async function getUniqueSubmissionNames() {

    // let submissionNames = []

    try {
        let res = await axios({
            url: "http://localhost:3001/submissions/summary",
            method: 'get'
        })
        // res.data.data.map((obj) => {
        //     submissionNames.push(obj.Submission_name);
        // })
        return res.data
        // let uniqueSubmissionNames = [...new Set(submissionNames)];
        // console.log(uniqueSubmissionNames)
        // return uniqueSubmissionNames;
    }
    catch (err) {
        console.error(err);
    }
}

export { getSubmissionPlotDetails, getUniqueSubmissionNames }