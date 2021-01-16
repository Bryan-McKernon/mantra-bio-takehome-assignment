import React, { useEffect, useRef } from 'react';
import './ChromatogramContainer.scss';
import Chart from 'chart.js';

const ChromatogramContainer = (props) => {
    
    let x_coordinates = props.ChromatogramData.x;
    let y_coordinates = props.ChromatogramData.y;

    let coordinates = [];

    for (let x in x_coordinates) {
        coordinates.push({x: x_coordinates[x], y: y_coordinates[x]})
    }

    let Canvas = useRef(null);

    useEffect(() => {    
        let CanvasContext = Canvas.current.getContext('2d');
        new Chart(CanvasContext, {
            type: 'scatter',
            data: {
                labels: [],
                datasets:[{
                    label: 'Data',
                    data: coordinates
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: props.ChromatogramData.x_units
                      }
                    }],
                    yAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: props.ChromatogramData.y_units
                        }
                      }]                      
                  } 
            }
        });
    });
    
    return (
        <div className="ChromatogramContainer">
            <canvas ref={Canvas} className="Chromatogram"></canvas>
        </div>
    );
};

export default ChromatogramContainer;