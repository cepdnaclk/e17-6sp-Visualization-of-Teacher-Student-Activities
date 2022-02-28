import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { useParams } from 'react-router-dom';
import CourseOverview from '../Components/CourseOverview';
import CourseSection2 from '../Components/CourseSection2';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';


export default function CoursePage() {
    let { pageName } = useParams();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {pageName === "Overview" ? <CourseOverview></CourseOverview> : null}
                {pageName === "Section2" ? <CourseSection2 /> : null}
            </Box>
        </Box>
    );
}
