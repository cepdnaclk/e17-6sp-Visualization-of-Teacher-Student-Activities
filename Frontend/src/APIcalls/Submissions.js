import axios from 'axios';


async function getSubmissionPlotDetails(selectedName) {

    try {
        let res = await axios({
            url: `http://localhost:3001/submissions/summary/plot?subName=${selectedName}`,
            method: 'get'
        })
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
}

async function getUniqueSubmissionNames() {

    try {
        let res = await axios({
            url: "http://localhost:3001/submissions/summary",
            method: 'get'
        })

        return res.data
    }
    catch (err) {
        console.error(err);
    }
}

async function getSubmissions(selectedName) {

    try {
        let res = await axios({
            url: `http://localhost:3001/submissions/users?subName=${selectedName}`,
            method: 'get'
        })

        return res.data
    }
    catch (err) {
        console.error(err);
    }
}

export { getSubmissionPlotDetails, getUniqueSubmissionNames, getSubmissions }