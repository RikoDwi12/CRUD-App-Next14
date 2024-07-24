import axios from "axios";


export const fetchProductsApi = async () => {
    const response = await axios.get("http://127.0.0.1:3005/products");
    return response.data;
}

export const createProductsApi = async (products : any) => {
    const response = await axios.post("http://127.0.0.1:3005/products",products);
    return response.data
}

export const editProductsApi = async () => {
    const response = await axios.put("http://127.0.0.1:3005/products");
    return response
}

export const deleteProductsApi = async () => {
    const response = await axios.delete("http://127.0.0.1:3005/products");
    return response
}