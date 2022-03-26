import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DevicesIcon from '@mui/icons-material/Devices';
import MaterialIcon from '@mui/icons-material/VideoFile';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import { Toolbar } from '@mui/material';

export default function SideBar() {

    const drawerWidth = 240;


    let links = ['./Overview', './Submissions','./LearningMaterials']
    let icons = [<DevicesIcon />, <GroupsRoundedIcon />, <MaterialIcon/>]
    let titles = ['Overview', 'Submissions','Learning Materials']

    function renderIcon(index) {
        return icons[index];
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },

            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {titles.map((text, index) => (
                        <ListItem button key={text} component="a" href={links[index]}>
                            <ListItemIcon>{renderIcon(index)}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Drawer>
    );
}