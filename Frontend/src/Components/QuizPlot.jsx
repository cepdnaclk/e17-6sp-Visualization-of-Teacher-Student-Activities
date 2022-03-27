import { useState , useEffect} from 'react';
import BarChart from "./BarChart"
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function QuizPlot() {

    const [xData, setXdata] = useState([])
    const [yData, setYdata] = useState([])
    const [viewData, setViewdata] = useState([])
    const [state, setState] = useState([])

    const updateSelect=(e)=>{
      setState(e.target.value)
    }
    //const [chartData, setChartData] = useState();
    let plotQuiz;

    useEffect(() => {
        
          let quizName = [];
          let submit = [];
          let view = [];
          axios.get("http://localhost:3001/quiz/summary")
          .then(res => {
              console.log(res.data);
              for (const dataObj of res.data.data) {
                quizName.push(dataObj.Quiz_name);
                submit.push(parseInt(dataObj.count));
                view.push(parseInt(dataObj.viewed));
              }
          console.log(view);
          setXdata(quizName)
          setYdata(submit)
          setViewdata(view)

        }).catch((e) => {
            console.log(e)
        })
    }, []);

    const GeneratePlot1 = () => {
        let data;
        
        data = {
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
      
      if(state == 20){
        data = {
          labels: xData, 
          
          datasets: [
              {
                  label: "No of Views",
                  data: viewData, 
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
    }


        return (
          <><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quizzes(Select submissions/views)</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="Quizzes"
              onChange={updateSelect}
            >
              <MenuItem value={10}>Submissions</MenuItem>
              <MenuItem value={20}>Views</MenuItem>
              
            </Select>
          </FormControl><div style={{ width: 1200 }}>
              <BarChart chartData={data} />
            </div></>
        );
    }

    



    return (
        <div>
            <h3>Quizzess</h3>
            {GeneratePlot1()}
            
        </div>
    );
}


