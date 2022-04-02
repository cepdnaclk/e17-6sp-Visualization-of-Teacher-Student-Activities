import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getSubmissions } from '../APIcalls/Submissions';
import StudentList from './StudentList';

export default function SelectDate(props) {
    const [selectedDate, setSelectedDate] = React.useState('');
    const selectedName = useSelector((state) => state.submission.value);
    const [ids, setIds] = React.useState([]);

    const handleChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const showStudents = () => {
        if (selectedDate === "") alert("Select a Date!")
        else {
            let userIds = []
            getSubmissions(selectedName).then((res) => { // worked
                res.data.map((row) => {
                    if (row.Date === selectedDate) {
                        userIds.push(row.User_id)
                    }
                })

                console.log(userIds)
                setIds([...new Set(userIds)])
            }).catch((e) => {
                console.log(e)
            })
        }
    }

    return (<div>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedDate}
                    label="Age"
                    onChange={handleChange}
                >
                    {props.dates.map((date) => {

                        return <MenuItem value={date} key={date}>{date}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
        <Button variant="contained" onClick={showStudents} sx={{ marginTop: '20px', marginBottom: '20px' }} >Show students (Unique)</Button>
        <StudentList ids={ids} />
    </div>

    );
}