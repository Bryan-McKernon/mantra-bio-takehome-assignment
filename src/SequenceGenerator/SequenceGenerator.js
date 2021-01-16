import React, { useEffect, useState } from 'react';
import getSequences from './getSequences';
import './SequenceGenerator.scss';

const SequenceContainer = (PassSequenceIdToRuns) => {
    const [Sequences, setSequences] = useState();
   
    const ReceiveSequences = async () => {
        const SequenceList = await getSequences(PassSequenceIdToRuns);
        setSequences(SequenceList);
    };

    useEffect(() => {
        ReceiveSequences();
    }, []);

    return (
        <div className="SequenceGeneratorContainer">
            <h4>Please click on a Sequence to view its Runs</h4>
            <table>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Operator</th>
                    <th>Run Time</th>
                </tr>
                {Sequences}
                </tbody>
            </table>
        </div>
    );
};

export default SequenceContainer;