import React, { useState, useEffect, createContext } from "react";
import { AxiosInstance } from "../routes/AxiosInstance";

export const AllProductsContext = createContext();

const ProductsContext = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    async function getAllProducts() {
        let res=await AxiosInstance.get("/shop/product/get");
        setAllProducts(res.data.data);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <AllProductsContext.Provider value={{allProducts}}>
            {props.children}
        </AllProductsContext.Provider>
    );
};

export default ProductsContext;