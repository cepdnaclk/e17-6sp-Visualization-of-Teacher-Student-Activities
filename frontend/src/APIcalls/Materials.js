import axios from 'axios';

async function getMaterialPlotDetails() {
    
    try {
        let res = await axios({
            url: `http://localhost:3001/learningMaterials/views`,
            method: 'get'
        })
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
}


export { getMaterialPlotDetails }