import React from 'react';
import Users from './Users';
import LogRecords from './LogRecords'

export default function CourseOverview() {
    return (
        <div>
            <h1>Overview</h1>
            <LogRecords/>
            <Users/>
        </div>
    );
}