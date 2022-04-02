import React from 'react';
import MaterialPlot from './MaterialsPlot';
import PDFPlot from './PDFViewsPlot';

export default function CourseMaterials() {
    return (
        <div>
            <h2>Learning Materials</h2>
            <MaterialPlot />
            <br></br>
            <PDFPlot />

        </div>
    );
}

// comment