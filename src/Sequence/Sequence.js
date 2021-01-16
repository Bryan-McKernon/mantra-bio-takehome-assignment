import React from 'react';
import './Sequence.scss';

const Sequence = (props) => {

    let SequenceID = props.id;

    const PassThisSequenceIdToRuns = () => {
        props.PassSequenceIdToRuns.PassSequenceIdToRuns(SequenceID);
    }

    return (
        <tr onClick={PassThisSequenceIdToRuns}>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.operator}</th>
            <th>{props.run_time}</th>
        </tr>
    );
};

export default Sequence;