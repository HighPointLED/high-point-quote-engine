import React from 'react';
import { MeasurementData } from '../types';

interface Props {
    measurements: MeasurementData;
    onChange: (measurements: MeasurementData) => void;
}

const fields: { name: keyof MeasurementData; label: string }[] = [
    { name: 'roofline', label: 'Roofline (ft)' },
    { name: 'peaks', label: 'Peaks (ft)' },
    { name: 'ridges', label: 'Ridges (ft)' },
    { name: 'dormers', label: 'Dormers (ft)' },
    { name: 'garage', label: 'Garage (ft)' },
    { name: 'rearRoofline', label: 'Rear Roofline (ft)' },
    { name: 'patio', label: 'Patio (ft)' },
    { name: 'landscapeLighting', label: 'Landscape Lighting (ft)' },
];

const MeasurementInputs: React.FC<Props> = ({ measurements, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0;
        onChange({ ...measurements, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Measurement Inputs</h2>
            {fields.map(({ name, label }) => (
                <div key={name}>
                    <label>
                        {label}:
                        <input
                            type="number"
                            name={name}
                            min="0"
                            value={measurements[name]}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            ))}
        </div>
    );
};

export default MeasurementInputs;
