import React from 'react';
import './ComponentsContainer.scss';

const ComponentsContainer = (props) => {
    const Components = [];
    for (let i in props.ComponentData) {
        Components.push(            
            <tr key={i}>                    
            <th>{props.ComponentData[i].component_name}</th>
            <th>{props.ComponentData[i].concentration_um}</th>                  
            <th>{props.ComponentData[i].id}</th>                  
            <th>{props.ComponentData[i].peak_height_mau}</th>                  
            <th>{props.ComponentData[i].retention_time_seconds}</th>                  
            <th>{props.ComponentData[i].run_id}</th>
            </tr>                    
        );
    }

    return (
        <div className="ComponentsContainer">
           <table>
                <tbody>
                <th>Component Name</th>
                <th>Concentration UM</th>                  
                <th>id</th>                  
                <th>Peak Height MAU</th>                  
                <th>Retention Time Seconds</th>                  
                <th>Run id</th>
                {Components}
                </tbody>
            </table>         
        </div>
    );
};

export default ComponentsContainer;