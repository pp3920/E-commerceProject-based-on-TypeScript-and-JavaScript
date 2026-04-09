import { calculateProductDiscount } from "../utils/discountCalculator.js";
import { calculateProductTax } from "../utils/taxCalculator.js";

export class product {
    private id: number;
    private title: string;
    private price: number;
    private  discountPercentage : number;
    private taxPercentage: number = 4.75;
    private category : string;

constructor(id: number, title: string,  price: number, discountPercentage : number  , category : string ) {
this.id = id;
this.title = title;
this.price = price;
this.discountPercentage = discountPercentage;
this.category = category;
}

public getPrice(): number {
    return  this.price;
}

public getdiscountPercentage() : number {
    return this.discountPercentage;
}

public getPriceWithDiscount():number {
    
    let pricWithDisc = this.price - calculateProductDiscount(this, this.discountPercentage) 
    return pricWithDisc;
}

public getPriceWithTax(): number {

    if (this.category = "groceries")
    {
        this.taxPercentage = 3
        let priceWithTax = this.price + calculateProductTax(this,this.taxPercentage )
        return priceWithTax;
        console.log("price with tax for groceries: " + priceWithTax)
    }
    else {
       
        let priceWithTax = this.price + calculateProductTax(this, this.taxPercentage)
        return priceWithTax;
        console.log("price with tax : " + priceWithTax)
    }

}

displayDetails(): string {
return `${this.title} costs $${this.price} and has Price after discount as $${this.getPriceWithDiscount() }`;
}
}

/* checking functionality
const product1 = new product( 1, "title", 250 , 10 , "category");
console.log(product1.displayDetails());
*/