import React from 'react';
import Sequence from '../Sequence/Sequence';

const generateSequences = (SequenceData, PassSequenceIdToRuns) => {
    const SequenceArr = [];
    for (let i in SequenceData) {
        SequenceArr.push(
            <Sequence
                key={i}
                id={SequenceData[i]["id"]}
                name={SequenceData[i]["name"]}
                operator={SequenceData[i]["operator"]}
                run_time={SequenceData[i]["run_time"]}
                PassSequenceIdToRuns={PassSequenceIdToRuns}
            ></Sequence>
        );
    }
    return SequenceArr;
}

export default generateSequences;