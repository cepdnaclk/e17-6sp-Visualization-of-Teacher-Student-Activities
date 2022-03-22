import React from 'react';
import { getSubmissionNames } from '../APIcalls/Submissions';

export default function CourseSubmissions() {
    return (
        <div>
            <h2>Submissions</h2>
            {getSubmissionNames()}
        </div>
    );
}

// comment