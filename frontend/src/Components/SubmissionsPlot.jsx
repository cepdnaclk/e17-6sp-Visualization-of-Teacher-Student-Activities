import React from 'react';
import { getSubmissionPlotDetails } from '../APIcalls/Submissions';

export default function SubmissionPlot() {

    // let [xPoints, setXPoints] = React.useState([]); // infinite thing
    // let [YPoints, setYPoints] = React.useState([]);

    const setAxisData = () => {
        getSubmissionPlotDetails().then((res) => {
            // console.log(res.data)
            let plotDataX = [];
            let plotDataY = [];
            res.data.map((obj) => {
                plotDataX.push(obj.Date);
                plotDataY.push(obj.Count);
            })
            // console.log(plotDataX, plotDataY) // worked
            return plotDataX, plotDataY;
        })
    }

    const generatePlot = () => {
        console.log(setAxisData()) // fix error undefined prints
        // draw plot from dummy x, y values
    }

    return (
        <div>
            <h3>submission plot</h3>
            {/* {setAxisData()} */}
            {generatePlot()}
        </div>
    );
}