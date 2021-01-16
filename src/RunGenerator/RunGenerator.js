import React, { useEffect, useState } from 'react';
import getRuns from './getRuns';
import './RunGenerator.scss';

const RunGenerator = (props) => {  
    const [Runs, setRuns] = useState();

    const ReceiveRuns = async () => {
        const RunsList = await getRuns(props.CurrentSequenceId, props.PassChromatogramData, props.PassComponentData);
        if (RunsList) setRuns(RunsList);
        else setRuns("No runs found for sequence");
    };
    
    useEffect(() => {
        ReceiveRuns();
    }, [props.CurrentSequenceId]);

    return (
        <div className="RunGeneratorContainer">
            <table>
                <tbody>               
                    {Runs}
                </tbody>
            </table>
        </div>
    );
};

export default RunGenerator;