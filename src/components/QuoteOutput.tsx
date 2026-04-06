import React from 'react';
import { CustomerData, PackageTier } from '../types';

interface Props {
    customer: CustomerData;
    totalLinearFeet: number;
    materialCost: number;
    laborCost: number;
    finalCustomerPrice: number;
    financingOptions: string[];
    selectedPackage: PackageTier;
}

const PACKAGE_LABELS: Record<PackageTier, string> = {
    good: 'Good',
    better: 'Better',
    best: 'Best',
};

const QuoteOutput: React.FC<Props> = ({
    customer,
    totalLinearFeet,
    materialCost,
    laborCost,
    finalCustomerPrice,
    financingOptions,
    selectedPackage,
}) => {
    return (
        <div>
            <h2>Quote Summary</h2>
            {customer.customerName && (
                <p>
                    <strong>Customer:</strong> {customer.customerName}
                </p>
            )}
            <p>
                <strong>Package:</strong> {PACKAGE_LABELS[selectedPackage]}
            </p>
            <p>
                <strong>Total Linear Feet:</strong> {totalLinearFeet} ft
            </p>
            <p>
                <strong>Material Cost:</strong> ${materialCost.toFixed(2)}
            </p>
            <p>
                <strong>Labor Cost:</strong> ${laborCost.toFixed(2)}
            </p>
            <p>
                <strong>Final Customer Price:</strong> ${finalCustomerPrice.toFixed(2)}
            </p>
            <h3>Financing Options</h3>
            <ul>
                {financingOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuoteOutput;
