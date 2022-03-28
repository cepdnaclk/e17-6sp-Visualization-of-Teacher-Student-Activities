import React from 'react';
import { getSubmissionPlotDetails } from '../APIcalls/Submissions';
import BarChart from './BarChart';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import SelectDate from './SelectDate';

export default function SubmissionPlot() {
    const selectedName = useSelector((state) => state.submission.value);

    const [xData, setXdata] = useState([])
    const [yData, setYdata] = useState([])

    const showGraph = () => {

        let plotDataX = []; // dummy values
        let plotDataY = [];
        getSubmissionPlotDetails(selectedName).then((res) => { // worked

            res.data.map((obj) => {
                plotDataX.push(obj.Date);
                plotDataY.push(obj.Count);
            })
            setXdata(plotDataX)
            setYdata(plotDataY)

        }).catch((e) => {
            console.log(e)
        })
    }

    const GeneratePlot = () => {

        const data = {
            labels: xData, // x axis
            datasets: [
                {
                    label: "No of Submissions",
                    data: yData, // y axis
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
        };

        return (
            <div style={{ width: 1000 }}>
                <BarChart chartData={data} />
            </div>
        );
    }

    return (
        <div>
            {/* {setAxisData()} */}
            <Button variant="contained" onClick={showGraph} sx={{ marginTop: '20px' }} >Generate Plot</Button>

            {GeneratePlot()}
            <h2>Check who submitted late!</h2>
            <SelectDate dates={xData} />

        </div>
    );
}