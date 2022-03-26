import { useState , useEffect} from 'react';
import BarChart from "./BarChart"
import axios from "axios";

export default function QuizPlot() {

    const [xData, setXdata] = useState([])
    const [yData, setYdata] = useState([])
    //const [chartData, setChartData] = useState();

    useEffect(() => {
        
          let quizName = [];
          let submit = [];
          axios.get("http://localhost:3001/quiz/summary")
          .then(res => {
              console.log(res.data);
              for (const dataObj of res.data.data) {
                quizName.push(dataObj.Quiz_name);
                submit.push(parseInt(dataObj.count));
              }
          setXdata(quizName)
          setYdata(submit)

        }).catch((e) => {
            console.log(e)
        })
    }, []);

    const GeneratePlot = () => {
        
        const data = {
            labels: xData, 
            
            datasets: [
                {
                    label: "No of Submissions",
                    data: yData, 
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
            <div style={{ width: 1200 }}>
                <BarChart chartData={data} />
            </div>
        );
    }



    return (
        <div>
            <h3>Quiz submission plot</h3>
            {GeneratePlot()}

        </div>
    );
}


