import React from 'react';
import PropTypes from 'prop-types';

const QuoteOutput = ({ totalLinearFeet, materialCost, laborCost, finalCustomerPrice, financingOptions }) => {
    return (
        <div>
            <h2>Quote Summary</h2>
            <p><strong>Total Linear Feet:</strong> {totalLinearFeet}</p>
            <p><strong>Material Cost:</strong> ${materialCost.toFixed(2)}</p>
            <p><strong>Labor Cost:</strong> ${laborCost.toFixed(2)}</p>
            <p><strong>Final Customer Price:</strong> ${finalCustomerPrice.toFixed(2)}</p>
            <h3>Financing Options</h3>
            <ul>
                {financingOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

QuoteOutput.propTypes = {
    totalLinearFeet: PropTypes.number.isRequired,
    materialCost: PropTypes.number.isRequired,
    laborCost: PropTypes.number.isRequired,
    finalCustomerPrice: PropTypes.number.isRequired,
    financingOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuoteOutput;