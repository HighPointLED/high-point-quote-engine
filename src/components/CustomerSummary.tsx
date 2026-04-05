import React from 'react';
import { Button } from 'react-bootstrap';

const CustomerSummary = () => {
    const handlePrint = () => {
        window.print();
    };

    const handleSavePDF = () => {
        const pdfContent = document.getElementById('summary').innerHTML;
        const pdfWindow = window.open('', '_blank');
        pdfWindow.document.write('<html><head><title>Customer Summary</title></head><body>');
        pdfWindow.document.write(pdfContent);
        pdfWindow.document.write('</body></html>');
        pdfWindow.document.close();
        pdfWindow.print();
    };

    return (
        <div>
            <h1>Customer Summary</h1>
            <div id="summary">
                {/* Replace this comment with actual summary content */}
                <p>Summary content goes here...</p>
            </div>
            <Button onClick={handlePrint} variant="primary">Print Summary</Button>
            <Button onClick={handleSavePDF} variant="secondary">Save as PDF</Button>
        </div>
    );
};

export default CustomerSummary;