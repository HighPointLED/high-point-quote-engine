// src/utils/calculator.ts

import { MeasurementData } from '../types';

/**
 * Sum all linear-foot measurements to get the total linear feet of the installation.
 */
function calculateTotalLinearFeet(measurements: MeasurementData): number {
    return (
        measurements.roofline +
        measurements.peaks +
        measurements.ridges +
        measurements.dormers +
        measurements.garage +
        measurements.rearRoofline +
        measurements.patio +
        measurements.landscapeLighting
    );
}

/**
 * Calculate material cost from total linear feet and cost per foot.
 */
function calculateMaterialCost(totalLinearFeet: number, costPerFoot: number): number {
    return totalLinearFeet * costPerFoot;
}

/**
 * Calculate the final customer price by applying a gross-margin markup.
 * finalPrice = subtotal / (1 - marginPercent / 100)
 */
function calculateFinalPrice(
    materialCost: number,
    labor: number,
    controller: number,
    wire: number,
    serviceFee: number,
    marginPercent: number,
): number {
    const subtotal = materialCost + labor + controller + wire + serviceFee;
    const margin = Math.min(Math.max(marginPercent, 0), 99) / 100;
    return subtotal / (1 - margin);
}

/**
 * Calculate a simple monthly payment with no interest.
 */
function calculateMonthlyPayment(totalAmount: number, months: number): number {
    if (months <= 0) return totalAmount;
    return totalAmount / months;
}

/**
 * Format a number as a USD currency string.
 */
function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

export {
    calculateTotalLinearFeet,
    calculateMaterialCost,
    calculateFinalPrice,
    calculateMonthlyPayment,
    formatCurrency,
};