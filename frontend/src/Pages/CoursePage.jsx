import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { useParams } from 'react-router-dom';
import CourseOverview from '../Components/CourseOverview';
import CourseSubmissions from '../Components/CourseSubmissions';
import CourseMaterials from '../Components/CourseMaterials';
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
                {pageName === "Overview" ? <CourseOverview /> : null}
                {pageName === "Submissions" ? <CourseSubmissions /> : null}
                {pageName === "LearningMaterials" ? <CourseMaterials /> : null}
            </Box>
        </Box>
    );
}
