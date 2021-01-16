import React from 'react';
import './Run.scss';

const Run = (props) => {
    const PassData = () => {
        props.PassChromatogramData(props.chromatogram);
        props.PassComponentData(props.components);
    }
    
    return (
        <tr onClick={PassData}>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.sequence_id}</th>
        </tr>
    );
};

export default Run;