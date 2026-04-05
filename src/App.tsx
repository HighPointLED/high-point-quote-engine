import React from 'react';
import Header from './components/Header';
import CustomerInfo from './components/CustomerInfo';
import MeasurementInputs from './components/MeasurementInputs';
import PricingSettings from './components/PricingSettings';
import PackageSelector from './components/PackageSelector';
import QuoteOutput from './components/QuoteOutput';
import CustomerSummary from './components/CustomerSummary';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
    const exportPDF = async () => {
        const element = document.getElementById('quote');
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(data, 'PNG', 0, 0);
        pdf.save('quote.pdf');
    };

    return (
        <div>
            <Header />
            <CustomerInfo />
            <MeasurementInputs />
            <PricingSettings />
            <PackageSelector />
            <QuoteOutput />
            <CustomerSummary />
            <div id='quote' style={{ display: 'none' }}>
              <Header />
              <CustomerInfo />
              <MeasurementInputs />
              <PricingSettings />
              <PackageSelector />
              <QuoteOutput />
              <CustomerSummary />
            </div>
            <button onClick={exportPDF}>Export to PDF</button>
        </div>
    );
};

export default App;
