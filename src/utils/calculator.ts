// src/utils/calculator.ts

/**
 * Calculate the quote based on specified parameters.
 * @param quantity - The quantity of items.
 * @param pricePerItem - The price of each item.
 * @returns The total quote amount.
 */
function calculateQuote(quantity: number, pricePerItem: number): number {
    return quantity * pricePerItem;
}

/**
 * Calculate monthly payments based on total amount and payment term.
 * @param totalAmount - The total amount to be financed.
 * @param months - The number of months to pay off the loan.
 * @returns The monthly payment amount.
 */
function calculateMonthlyPayments(totalAmount: number, months: number): number {
    return totalAmount / months;
}

/**
 * Format a number as a currency string.
 * @param amount - The amount to format.
 * @returns A string formatted as currency.
 */
function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

export { calculateQuote, calculateMonthlyPayments, formatCurrency };