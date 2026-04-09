$$
Project Plan:
$$

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 1: Product.ts:

Product Class will have feature from the api json
should have fxn like display_details() and getPricewithDisc();

I created class wrote with the fields which I would be extracting to calcualte the tax and discount rate. Set fields encapuslated and infor is displayed using displayed fxn.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Step 2:Utilities:

Create a calculateDiscount() function to handle discount calculations for products.
This function should return the dollar amount that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $10.

Performed logic of our calculation here
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Step 3: service:
call the URL and fetch data
use async and await and Promise
Step 4: error class - custom error class

I fetched data from the Url using async/await function and handled any issue using error handler class

--------------------------------------------------------------------------------------------------------------------------------------------------

Step 5: create main class to
Main Entry File (index.ts):
Import the product classes, tax calculator, and API service.
Create instances of Product by fetching product data from the API.
Use asynchronous functions to fetch product data and display it.
Demonstrate error handling and OOP principles in action.

Applied simple logic by creating instance of product array and using indexing method  --- productData.products[i].id  It helped me in grabbing infor from the array.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


**Reflection questions:**

In this project, I implemented TypeScript features and object-oriented programming (OOP) principles to create a structured and type-safe application. I designed the Product class using encapsulation to keep member variables private and expose necessary information through methods like display_details() and getPricewithDisc(). This ensured that the internal state of each product was protected while still allowing controlled access to relevant data. Additionally, I leveraged inheritance to structure utility functions and error handling, making the code modular and reusable. TypeScript’s static typing helped catch potential errors during development, particularly with API response data, improving the reliability of the application.

One of the main challenges I encountered was handling object arrays in the main.ts file. I needed to map API data to instances of the Product class and extract the necessary information for calculations. Initially, I struggled to combine the data structure with object-oriented methods, but after researching and experimenting with different approaches, I settled on creating a product array and accessing objects via indexing. This method proved efficient and aligned well with TypeScript’s type safety features.

Asynchronous operations were another critical aspect of this project. I used async and await to fetch product data from the API, ensuring that the application waited for responses before proceeding. This approach helped maintain a predictable flow, even when network requests were delayed. To manage potential errors, I implemented a custom error handler class that captured exceptions during data fetching and displayed meaningful messages, preventing the application from crashing unexpectedly.

Overall, this project reinforced my understanding of OOP concepts like encapsulation and inheritance, and demonstrated how TypeScript can be used to enforce type safety while managing asynchronous operations effectively. It also strengthened my problem-solving skills in handling real-world API data and object management.


