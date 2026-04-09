import type { product } from "../models/product.js";



export function calculateProductDiscount(product: product, discountPercentage: number): number {
    return calculateDiscount(product.getPrice(), discountPercentage);
}

function calculateDiscount(price: number, discountPercentage: number): number {
    return ((price * (discountPercentage / 100)));
  
}