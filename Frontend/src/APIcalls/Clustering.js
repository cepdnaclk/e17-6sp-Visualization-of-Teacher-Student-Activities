import axios from 'axios';

async function getUserClusters() {
    
    try {
        let res = await axios({
            url: `http://localhost:3001/clustering/list`,
            method: 'get'
        })
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
}


export { getUserClusters }