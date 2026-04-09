import { errorHandler } from "../utils/errorHandler.js";

/*
 * Fetching data from the URL and using try/catch block to handle errors 
 */
export async function fetchURL() {
    try {
        const URL = "https://dummyjson.com/products/";
        let res = await fetch(URL);

        if (!res.ok) {
            throw new Error("fetch is not working");
        }

        const data = await res.json()
        return data;  //returning data
    }
    catch (error) {
        if (error instanceof errorHandler) {
            throw new errorHandler ("Message:" +  error.message); // error message from Handler class
        } 
        else{
             throw new Error ("Unknown Error");
        }
    }
}
