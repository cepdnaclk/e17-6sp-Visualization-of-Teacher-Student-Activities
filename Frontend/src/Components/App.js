import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePage from '../Pages/CoursePage';

// import { AuthContext } from '../Helpers/AuthContext';
// import { useState, useEffect } from 'react';
// import Axios from 'axios';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/CoursePage/:pageName" element={<CoursePage />} />
      </Routes>
    </Router>

  )
}

export default App;
