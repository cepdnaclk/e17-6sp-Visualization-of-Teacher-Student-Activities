import { useState , useEffect} from 'react';
import BarChart from "./BarChart"
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import UnorderedList from "./UnorderedList"

export default function ClusterData() {

  const [userSet1, set_1] = useState([])
  const [userSet2, set_2] = useState([])
  const [userSet3, set_3] = useState([])
  const [state, setState] = useState([])

  const updateSelect=(e)=>{
    setState(e.target.value)
  }
   
  let ClusterData;

    useEffect(() => {      
      let Data_1 = [];
      let Data_2= [];
      let Data_3 = [];
        axios.get("http://localhost:3001/Clustering/list")
        .then(res => {
        console.log(res.data);
        for (const dataObj of res.data.data) {
          if(dataObj.clusters == 0){
            Data_1.push(dataObj.User);
          }else if(dataObj.clusters == 1){
            Data_2.push(dataObj.User)
          }else{
            Data_3.push(dataObj.User)
          }
        }
        console.log(Data_1);
        set_1(Data_1)
        set_2(Data_2)
        set_3(Data_3)})
        
        .catch((e) => {
            console.log(e)
        })
     
    }, []);
    
  const Users = () => {

    let data =[];
    let len ;

    //data = userSet1;      
    if(state == 20){
      data = userSet2;
    }else if(state == 30){
      data = userSet3;
    }else if(state == 10 ){
      data = userSet1
    } 
    len = data.length;
    console.log(data)
    return (
      <><FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Cluster</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Clusters"
          onChange={updateSelect}
        >
        <MenuItem value={10}>Cluster 1</MenuItem>
        <MenuItem value={20}>Cluster 2</MenuItem>
        <MenuItem value={30}>Cluster 3</MenuItem>    
        </Select>
      </FormControl><div style={{ width: 1200 }}>
        <br></br>
        No. of users in cluster : {len}
        <UnorderedList items = {data} />
        </div></>
      );
  }


  return (
      <div>
        <h3>Users(IDs) belong to each cluster</h3>  
        {Users()}           
      </div>
  );
}


