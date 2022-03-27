import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getUniqueSubmissionNames } from '../APIcalls/Submissions';
import { useDispatch } from 'react-redux';
import { set } from '../features/submission'

export default function BasicSelectSubmissions(props) {
  const [selectedName, setSelectedName] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedName(event.target.value);
    dispatch(set(event.target.value));
  };

  const [uniqueSubmissionNames, setUniqueSubmissionNames] = React.useState([])

  React.useEffect(() => {
    let submissionNames = []
    getUniqueSubmissionNames().then((res) => { // worked

      res.data.map((obj) => {
        submissionNames.push(obj.Submission_name);
      })
      setUniqueSubmissionNames([...new Set(submissionNames)]);
    }).catch((e) => {
      console.log(e)
    })
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedName}
          label="Age"
          onChange={handleChange}
        >
          {uniqueSubmissionNames.map((name) => {
            let i = 0
            return <MenuItem value={name} key={name}>{name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}