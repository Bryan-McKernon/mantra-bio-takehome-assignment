import React, { useEffect, useState } from 'react';
import getRuns from './getRuns';
import './RunGenerator.scss';

const RunGenerator = (CurrentSequenceId) => {  
    const [Runs, setRuns] = useState();

    const ReceiveRuns = async () => {
        const RunsList = await getRuns(CurrentSequenceId.CurrentSequenceId);        
        setRuns(RunsList);
    };
    
    useEffect(() => {
        ReceiveRuns();
    }, [CurrentSequenceId]);

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