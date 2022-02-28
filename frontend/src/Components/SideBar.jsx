import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DevicesIcon from '@mui/icons-material/Devices';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import { Toolbar } from '@mui/material';

export default function SideBar() {

    const drawerWidth = 240;


    let links = ['./Overview', './Section2']
    let icons = [<DevicesIcon />, <GroupsRoundedIcon />]
    let titles = ['Overview', 'Section 2']

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