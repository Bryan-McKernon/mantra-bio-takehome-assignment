import React from 'react';
import './Run.scss';

const Run = (props) => {
    console.log(props)
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.sequence_id}</th>
        </tr>
    );
};

export default Run;