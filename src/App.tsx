import React, { useRef, useState } from 'react';
import Header from './components/Header';
import CustomerInfo from './components/CustomerInfo';
import MeasurementInputs from './components/MeasurementInputs';
import PricingSettings from './components/PricingSettings';
import PackageSelector from './components/PackageSelector';
import QuoteOutput from './components/QuoteOutput';
import CustomerSummary from './components/CustomerSummary';
import { CustomerData, MeasurementData, PackageTier, PricingData } from './types';
import {
    calculateFinalPrice,
    calculateMaterialCost,
    calculateMonthlyPayment,
    calculateTotalLinearFeet,
    formatCurrency,
} from './utils/calculator';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Material cost multiplier applied per package tier
const PACKAGE_MULTIPLIERS: Record<PackageTier, number> = {
    good: 1.0,
    better: 1.15,
    best: 1.3,
};

const FINANCING_TERMS = [12, 24, 36];

const App = () => {
    const [customer, setCustomer] = useState<CustomerData>({
        customerName: '',
        address: '',
        phone: '',
        email: '',
        referralSource: '',
        notes: '',
    });

    const [measurements, setMeasurements] = useState<MeasurementData>({
        roofline: 0,
        peaks: 0,
        ridges: 0,
        dormers: 0,
        garage: 0,
        rearRoofline: 0,
        patio: 0,
        landscapeLighting: 0,
    });

    const [pricing, setPricing] = useState<PricingData>({
        costPerFoot: 8.5,
        labor: 500,
        controller: 250,
        wire: 150,
        serviceFee: 99,
        marginPercent: 40,
    });

    const [selectedPackage, setSelectedPackage] = useState<PackageTier>('better');

    const quoteRef = useRef<HTMLDivElement>(null);

    const totalLinearFeet = calculateTotalLinearFeet(measurements);
    const materialCost =
        calculateMaterialCost(totalLinearFeet, pricing.costPerFoot) *
        PACKAGE_MULTIPLIERS[selectedPackage];
    const laborCost = pricing.labor;
    const finalCustomerPrice = calculateFinalPrice(
        materialCost,
        laborCost,
        pricing.controller,
        pricing.wire,
        pricing.serviceFee,
        pricing.marginPercent,
    );
    const financingOptions = FINANCING_TERMS.map(
        (months) =>
            `${months} months: ${formatCurrency(calculateMonthlyPayment(finalCustomerPrice, months))}/mo`,
    );

    const exportPDF = async () => {
        const element = quoteRef.current;
        if (!element) return;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('quote.pdf');
    };

    return (
        <div>
            <Header />
            <CustomerInfo customer={customer} onChange={setCustomer} />
            <MeasurementInputs measurements={measurements} onChange={setMeasurements} />
            <PricingSettings pricing={pricing} onChange={setPricing} />
            <PackageSelector
                selectedPackage={selectedPackage}
                onSelect={setSelectedPackage}
                totalLinearFeet={totalLinearFeet}
                pricing={pricing}
            />
            <div ref={quoteRef}>
                <QuoteOutput
                    customer={customer}
                    totalLinearFeet={totalLinearFeet}
                    materialCost={materialCost}
                    laborCost={laborCost}
                    finalCustomerPrice={finalCustomerPrice}
                    financingOptions={financingOptions}
                    selectedPackage={selectedPackage}
                />
                <CustomerSummary customer={customer} />
            </div>
            <button onClick={exportPDF}>Export to PDF</button>
        </div>
    );
};

export default App;

