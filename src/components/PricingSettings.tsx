import React, { useState } from 'react';
import { PricingData } from '../types';

interface Props {
    pricing: PricingData;
    onChange: (pricing: PricingData) => void;
}

const PricingSettings: React.FC<Props> = ({ pricing, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0;
        onChange({ ...pricing, [e.target.name]: value });
    };

    return (
        <div>
            <h2 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                Pricing Settings {isOpen ? '−' : '+'}
            </h2>
            {isOpen && (
                <div>
                    <div>
                        <label>Cost Per Foot ($):</label>
                        <input
                            type="number"
                            name="costPerFoot"
                            min="0"
                            step="0.01"
                            value={pricing.costPerFoot}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Labor ($):</label>
                        <input
                            type="number"
                            name="labor"
                            min="0"
                            step="0.01"
                            value={pricing.labor}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Controller ($):</label>
                        <input
                            type="number"
                            name="controller"
                            min="0"
                            step="0.01"
                            value={pricing.controller}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Wire ($):</label>
                        <input
                            type="number"
                            name="wire"
                            min="0"
                            step="0.01"
                            value={pricing.wire}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Service Fee ($):</label>
                        <input
                            type="number"
                            name="serviceFee"
                            min="0"
                            step="0.01"
                            value={pricing.serviceFee}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Margin (%):</label>
                        <input
                            type="number"
                            name="marginPercent"
                            min="0"
                            max="99"
                            step="0.1"
                            value={pricing.marginPercent}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PricingSettings;

