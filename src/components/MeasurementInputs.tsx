import React from 'react';

const MeasurementInputs: React.FC = () => {
    return (
        <div>
            <h2>Measurement Inputs</h2>
            <div>
                <label>
                    Roofline:
                    <input type='number' name='roofline' />
                </label>
            </div>
            <div>
                <label>
                    Peaks:
                    <input type='number' name='peaks' />
                </label>
            </div>
            <div>
                <label>
                    Ridges:
                    <input type='number' name='ridges' />
                </label>
            </div>
            <div>
                <label>
                    Dormers:
                    <input type='number' name='dormers' />
                </label>
            </div>
            <div>
                <label>
                    Garage:
                    <input type='number' name='garage' />
                </label>
            </div>
            <div>
                <label>
                    Rear Roofline:
                    <input type='number' name='rearRoofline' />
                </label>
            </div>
            <div>
                <label>
                    Patio:
                    <input type='number' name='patio' />
                </label>
            </div>
            <div>
                <label>
                    Landscape Lighting:
                    <input type='number' name='landscapeLighting' />
                </label>
            </div>
        </div>
    );
};

export default MeasurementInputs;