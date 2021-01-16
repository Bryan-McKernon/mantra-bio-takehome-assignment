import Axios from 'axios';
import generateRuns from './generateRuns';

const getRuns = async (SequenceID) => {
    let Runs = await Axios.get(`https://storage.googleapis.com/mantrabio-hiring-exercises/2020-fe-eng/api/hplc/${SequenceID}/runs.json`)
    .then((RunData) => {
        const RunList = generateRuns(RunData.data);
        return RunList;        
    }).catch((err) => {
        console.log(err);
    });
    return Runs;
};

export default getRuns;