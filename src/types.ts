// src/types.ts

// Customer information entered in the form
export interface CustomerData {
    customerName: string;
    address: string;
    phone: string;
    email: string;
    referralSource: string;
    notes: string;
}

// Linear-foot measurements for each section of the installation
export interface MeasurementData {
    roofline: number;
    peaks: number;
    ridges: number;
    dormers: number;
    garage: number;
    rearRoofline: number;
    patio: number;
    landscapeLighting: number;
}

// Configurable pricing inputs used for cost calculation
export interface PricingData {
    costPerFoot: number;
    labor: number;
    controller: number;
    wire: number;
    serviceFee: number;
    marginPercent: number;
}

// Available package tiers
export type PackageTier = 'good' | 'better' | 'best';