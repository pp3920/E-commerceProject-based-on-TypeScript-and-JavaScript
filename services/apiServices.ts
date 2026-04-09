import { errorHandler } from "../utils/errorHandler.js";

async function fetchURL() {
    try {
        const URL = "https://dummyjson.com/products/";
        let res = await fetch(URL);

        if (!res.ok) {
            throw new errorHandler("Network response was not ok");
        }

        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        if (error instanceof errorHandler) {
            console.error(" Error Message:", error.message);
        } 
    }
}
