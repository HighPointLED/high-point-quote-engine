import { PackageTier } from './types';

export const PACKAGE_MULTIPLIERS: Record<PackageTier, number> = {
    good: 1.0,
    better: 1.15,
    best: 1.3,
};

export const MIN_MARGIN = 0;
export const MAX_MARGIN = 99;

export const FINANCING_TERMS = [12, 24, 36];
