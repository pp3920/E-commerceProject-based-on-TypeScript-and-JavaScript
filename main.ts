/*
Import the product classes, tax calculator, and API service.
Create instances of Product by fetching product data from the API.
Use asynchronous functions to fetch product data and display it.
Demonstrate error handling and OOP principles in action.
*/

import { product } from "./src/models/product.js";
import { fetchURL } from "./src/services/apiServices.js"

async function initApp()
{
    console.log("Application Started ...")
     
    //getting product data
    const productData = await fetchURL();
    
      for (let i = 0; i < productData.products.length; i++) {
        let pro = new product(productData.products[i].id, productData.products[i].title, productData.products[i].price, productData.products[i].discountPercentage ,productData.products[i].category);
        console.log(pro.displayDetails());
        console.log(pro.getPriceWithTax());
        console.log("\n");
    }
}

initApp();
