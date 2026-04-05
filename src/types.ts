// src/types.ts

// Interface for Customer Information
export interface CustomerInfo {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

// Interface for Measurements
export interface Measurements {
    width: number;
    height: number;
    depth: number;
    weight?: number;
}

// Interface for Pricing
export interface Pricing {
    basePrice: number;
    discount?: number;
    finalPrice: number;
}

// Interface for Quotes
export interface Quote {
    quoteId: string;
    customer: CustomerInfo;
    measurements: Measurements;
    pricing: Pricing;
    createdAt: string;
}