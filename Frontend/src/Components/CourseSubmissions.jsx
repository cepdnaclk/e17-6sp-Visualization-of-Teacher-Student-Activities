import React from 'react';
import SubmissionPlot from './SubmissionsPlot';
import { useState, useEffect } from 'react';
import BasicSelectSubmissions from './BasicSelectSubmissions';

export default function CourseSubmissions() {

    return (
        <div>
            <h2>Submissions</h2>
            <BasicSelectSubmissions title="Submission Name" />
            <SubmissionPlot />

        </div>
    );
}

// comment