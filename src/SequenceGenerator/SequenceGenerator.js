import React, { useEffect, useState } from 'react';
import getSequences from './getSequences';

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
        <div>
            <table>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>operator</th>
                    <th>run time</th>
                </tr>
                {Sequences}
                </tbody>
            </table>
        </div>
    );
};

export default SequenceContainer;