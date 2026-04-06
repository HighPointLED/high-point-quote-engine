import React from 'react';
import { CustomerData } from '../types';

interface Props {
    customer: CustomerData;
}

const CustomerSummary: React.FC<Props> = ({ customer }) => {
    const handlePrint = () => {
        window.print();
    };

    const handleSavePDF = () => {
        const summaryEl = document.getElementById('summary');
        if (!summaryEl) return;
        const pdfWindow = window.open('', '_blank');
        if (!pdfWindow) return;
        pdfWindow.document.write('<html><head><title>Customer Summary</title></head><body>');
        pdfWindow.document.write(summaryEl.innerHTML);
        pdfWindow.document.write('</body></html>');
        pdfWindow.document.close();
        pdfWindow.print();
    };

    return (
        <div>
            <h2>Customer Summary</h2>
            <div id="summary">
                {customer.customerName ? (
                    <>
                        <p><strong>Name:</strong> {customer.customerName}</p>
                        <p><strong>Address:</strong> {customer.address}</p>
                        <p><strong>Phone:</strong> {customer.phone}</p>
                        <p><strong>Email:</strong> {customer.email}</p>
                        {customer.referralSource && (
                            <p><strong>Referral Source:</strong> {customer.referralSource}</p>
                        )}
                        {customer.notes && (
                            <p><strong>Notes:</strong> {customer.notes}</p>
                        )}
                    </>
                ) : (
                    <p>Enter customer information above to see the summary.</p>
                )}
            </div>
            <button onClick={handlePrint}>Print Summary</button>
            <button onClick={handleSavePDF}>Save as PDF</button>
        </div>
    );
};

export default CustomerSummary;
