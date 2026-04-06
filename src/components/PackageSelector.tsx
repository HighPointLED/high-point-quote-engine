import React from 'react';
import { PackageTier, PricingData } from '../types';
import {
    calculateFinalPrice,
    calculateMaterialCost,
    formatCurrency,
} from '../utils/calculator';
import { PACKAGE_MULTIPLIERS } from '../constants';

interface Props {
    selectedPackage: PackageTier;
    onSelect: (tier: PackageTier) => void;
    totalLinearFeet: number;
    pricing: PricingData;
}

const PACKAGES: {
    tier: PackageTier;
    label: string;
    features: string[];
}[] = [
    {
        tier: 'good',
        label: 'Good',
        features: [
            'Standard LED pixel lights',
            '16 million color options',
            'Smartphone app control',
            'Annual maintenance plan',
        ],
    },
    {
        tier: 'better',
        label: 'Better',
        features: [
            'Premium LED pixel lights',
            '16 million color options',
            'Smartphone app control',
            'Enhanced weather resistance',
            'Annual maintenance plan',
        ],
    },
    {
        tier: 'best',
        label: 'Best',
        features: [
            'Elite LED pixel lights',
            '16 million color options',
            'Smart hub + app control',
            'Enhanced weather resistance',
            'Voice assistant integration',
            'Annual maintenance plan',
        ],
    },
];

const PackageSelector: React.FC<Props> = ({
    selectedPackage,
    onSelect,
    totalLinearFeet,
    pricing,
}) => {
    const getPrice = (multiplier: number) => {
        const materialCost = calculateMaterialCost(totalLinearFeet, pricing.costPerFoot) * multiplier;
        return calculateFinalPrice(
            materialCost,
            pricing.labor,
            pricing.controller,
            pricing.wire,
            pricing.serviceFee,
            pricing.marginPercent,
        );
    };

    return (
        <div>
            <h2>Select a Package</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
                {PACKAGES.map(({ tier, label, features }) => {
                    const price = getPrice(PACKAGE_MULTIPLIERS[tier]);
                    const isSelected = selectedPackage === tier;
                    return (
                        <div
                            key={tier}
                            onClick={() => onSelect(tier)}
                            style={{
                                border: isSelected ? '2px solid #007bff' : '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                flex: 1,
                                background: isSelected ? '#e8f0fe' : 'transparent',
                            }}
                        >
                            <h3>{label}</h3>
                            <p>
                                <strong>{totalLinearFeet > 0 ? formatCurrency(price) : '—'}</strong>
                            </p>
                            <ul style={{ textAlign: 'left', paddingLeft: '16px' }}>
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PackageSelector;
