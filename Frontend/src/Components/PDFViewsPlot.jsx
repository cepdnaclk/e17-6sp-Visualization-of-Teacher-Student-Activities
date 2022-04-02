import { useState , useEffect} from 'react';
import BarChart from "./BarChart"
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function PDFPlot() {

    const [xData, setXdata] = useState([])
    const [yData, setYdata] = useState([])
    const [xData_2, setXdata_2] = useState([])
    const [yData_2, setYdata_2] = useState([])
    const [state, setState] = useState([])

    const updateSelect=(e)=>{
      setState(e.target.value)
    }
    //const [chartData, setChartData] = useState();
    let plotPDF;

    useEffect(() => {
        
          let PDFName_1 = [];
          let PDFName_2= [];
          let highViews = [];
          let lowViews = [];
          axios.get("http://localhost:3001/learningMaterials/PDF/views/low")
          .then(res => {
              console.log(res.data);
              for (const dataObj of res.data.data) {
                PDFName_1.push(dataObj.Material_name);
                //submit.push(parseInt(dataObj.count));
                lowViews.push(parseInt(dataObj.Count));
              }
          console.log(lowViews);
          setXdata(PDFName_1)
          setYdata(lowViews)})

          axios.get("http://localhost:3001/learningMaterials/PDF/views/high")
          .then(res => {
              console.log(res.data);
              for (const dataObj of res.data.data) {
                PDFName_2.push(dataObj.Material_name);
                //submit.push(parseInt(dataObj.count));
                highViews.push(parseInt(dataObj.Count));
              }
          //console.log(lowViews);
          
          
         
          //console.log(highViews);
          setXdata_2(PDFName_2)
          setYdata_2(highViews)

        })
         
    

        .catch((e) => {
            console.log(e)
        })

    }, []);

    const GeneratePlot1 = () => {
        let data;
        
        data = {
            labels: xData, 
            
            datasets: [
                {
                    label: "No of Views",
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
          labels: xData_2, 
          
          datasets: [
              {
                  label: "No of Views",
                  data: yData_2, 
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
            <InputLabel id="demo-simple-select-label">PDF(less/more interactions)</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="PDF views and competions"
              onChange={updateSelect}
            >
              <MenuItem value={10}>PDF with less interactions</MenuItem>
              <MenuItem value={20}>PDF with more interactions</MenuItem>
              
            </Select>
          </FormControl><div style={{ width: 1200 }}>
            <br></br>
              <BarChart chartData={data} />
            </div></>
        );
    }

    



    return (
        <div>
            <h3>Student iteractions on learning material - PDF</h3>
            {GeneratePlot1()}
            
        </div>
    );
}


