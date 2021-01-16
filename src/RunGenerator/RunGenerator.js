import React, { useEffect, useState } from 'react';
import getRuns from './getRuns';
import './RunGenerator.scss';

const RunGenerator = (props) => {  
    const [Runs, setRuns] = useState();

    const ReceiveRuns = async () => {
        const RunsList = await getRuns(props.CurrentSequenceId, props.PassChromatogramData, props.PassComponentData);
        if (RunsList) setRuns(RunsList);
        else setRuns("No runs found for this sequence");
    };
    
    useEffect(() => {
        ReceiveRuns();
    }, [props.CurrentSequenceId]);

    return (
        <div className="RunGeneratorContainer">
            <h4>Please select a run to view Component and Chromatogram</h4>
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Sequence id</th>
                    </tr>
                    {Runs}
                </tbody>
            </table>
        </div>
    );
};

export default RunGenerator;