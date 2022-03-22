import React from 'react';
import { getSubmissionPlotDetails } from '../APIcalls/Submissions';

export default function SubmissionPlot() {

    let [xPoints, setXPoints] = React.useState([]);
    let [YPoints, setYPoints] = React.useState([]);

    const setAxisData = () => {
        getSubmissionPlotDetails().then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            <h3>submission plot</h3>
            {setAxisData()}
        </div>
    );
}