import type { product } from "../models/product.js";


export function calculateProductTax(product: product, taxPercentage: number): number {

    return calculateTax(product.getPrice(), taxPercentage);
}

function calculateTax(price: number, taxPercentage: number): number {
    return ((price * (taxPercentage / 100)));
  
}