import React from 'react';
import './ComponentsContainer.scss';

const ComponentsContainer = (props) => {
    return (
        <div className="ComponentsContainer">
           <table>
                <tbody>
                <tr>
                    <th>Component Name: {props.ComponentData[0].component_name}</th>
                    <th>Concentration UM: {props.ComponentData[0].concentration_um}</th>                  
                    <th>id: {props.ComponentData[0].id}</th>                  
                    <th>Peak Height MAU: {props.ComponentData[0].peak_height_mau}</th>                  
                    <th>Retention Time Seconds: {props.ComponentData[0].retention_time_seconds}</th>                  
                    <th>Run id: {props.ComponentData[0].run_id}</th>
                </tr>
                </tbody>
            </table>         
        </div>
    );
};

export default ComponentsContainer;