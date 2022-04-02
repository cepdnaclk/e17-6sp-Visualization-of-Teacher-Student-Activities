import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function StudentList(props) {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}

        >
            {<ul>

                {props.ids.map((item) => (
                    <ListItem key={`item-${item}`}>
                        <ListItemText primary={`Student id: ${item}`} />
                    </ListItem>
                ))}
            </ul>}
        </List>
    );
}
