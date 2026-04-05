import React from 'react';

const CustomerInfo = () => {
    const [customerName, setCustomerName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [referralSource, setReferralSource] = React.useState('');
    const [notes, setNotes] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ customerName, address, phone, email, referralSource, notes });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer Name:</label>
                <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Referral Source:</label>
                <input type="text" value={referralSource} onChange={(e) => setReferralSource(e.target.value)} />
            </div>
            <div>
                <label>Notes:</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerInfo;