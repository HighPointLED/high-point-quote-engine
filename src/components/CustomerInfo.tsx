import React from 'react';
import { CustomerData } from '../types';

interface Props {
    customer: CustomerData;
    onChange: (customer: CustomerData) => void;
}

const CustomerInfo: React.FC<Props> = ({ customer, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange({ ...customer, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Customer Information</h2>
            <div>
                <label>Customer Name:</label>
                <input
                    type="text"
                    name="customerName"
                    value={customer.customerName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Referral Source:</label>
                <input
                    type="text"
                    name="referralSource"
                    value={customer.referralSource}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Notes:</label>
                <textarea
                    name="notes"
                    value={customer.notes}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default CustomerInfo;
