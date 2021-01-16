import Axios from 'axios';
import generateSequences from './generateSequences';

const getSequences = async (PassSequenceIdToRuns) => {
    let Sequences = await Axios.get(`https://storage.googleapis.com/mantrabio-hiring-exercises/2020-fe-eng/api/hplc.json`)
    .then((SequenceData) => {
        const SequenceList = generateSequences(SequenceData.data, PassSequenceIdToRuns);
        return SequenceList;        
    }).catch((err) => {
        console.log(err);
    });
    return Sequences;
};

export default getSequences;