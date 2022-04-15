import React from 'react';
import MaterialPlot from './MaterialsPlot';
import ClusterData from './Clustering';
import img from '../assets/clustering.png';

export default function UserClustering() {
    return (
        <div>
            <h2>Clustering of users</h2>
            <h3>Algorithm used</h3>
            <li>K medoids algorithm</li>
            <div>
                <img src={img} alt="fireSpot" />
            </div>
            <br></br>
            <ClusterData />

        </div>
    );
}

// comment