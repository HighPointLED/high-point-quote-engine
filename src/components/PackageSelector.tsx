import React from 'react';

const packages = [
    {
        label: 'Good',
        price: '$99',
        features: [
            'Basic feature 1',
            'Basic feature 2',
            'Basic feature 3'
        ]
    },
    {
        label: 'Better',
        price: '$149',
        features: [
            'Better feature 1',
            'Better feature 2',
            'Better feature 3',
            'Added feature'
        ]
    },
    {
        label: 'Best',
        price: '$199',
        features: [
            'Best feature 1',
            'Best feature 2',
            'Best feature 3',
            'Premium feature 1',
            'Premium feature 2'
        ]
    }
];

const PackageSelector = () => {
    return (
        <div>
            <h2>Select a Package</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {packages.map((pkg) => (
                    <div key={pkg.label} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                        <h3>{pkg.label}</h3>
                        <p><strong>{pkg.price}</strong></p>
                        <ul>
                            {pkg.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackageSelector;