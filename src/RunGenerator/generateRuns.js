import React from 'react';
import Run from '../Run/Run';

const generateRuns = (RunData) => {
    const RunArr = [];
    for (let i in RunData) {
        RunArr.push(
            <Run
                key={i}
                id={RunData[i]["id"]}
                name={RunData[i]["name"]}
                sequence_id={RunData[i]["sequence_id"]}
                chromatogram={RunData[i]["chromatogram"]}
                components={RunData[i]["components"]}
            ></Run>
        );
    }
    return RunArr;
}

export default generateRuns;