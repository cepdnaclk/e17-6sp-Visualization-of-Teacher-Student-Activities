import React from 'react';
import { getSubmissionPlotDetails } from '../APIcalls/Submissions';
import BarChart from './BarChart';
import { useState } from 'react';

export default function SubmissionPlot() {

    let plotDataX = ["date1", "date2"]; // dummy values
    let plotDataY = [1, 2];

    const setAxisData = () => {
        getSubmissionPlotDetails().then((res) => { // worked

            res.data.map((obj) => {
                plotDataX.push(obj.Date);
                plotDataY.push(obj.Count);
            })

        })
    }

    const GeneratePlot = () => {
        console.log(plotDataX, plotDataY)
        const [data, setData] = useState({
            labels: plotDataX, // x axis
            datasets: [
                {
                    label: "Users Gained",
                    data: plotDataY, // y axis
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        });

        return (
            <div style={{ width: 700 }}>
                <BarChart chartData={data} />
            </div>
        );
    }

    return (
        <div>
            <h3>submission plot</h3>
            {setAxisData()}
            {GeneratePlot()}

        </div>
    );
}