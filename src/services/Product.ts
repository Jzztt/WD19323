import { IProduct } from "../types/product";
import instanceAxios from "../ultis/configAxios";

const getAllProduct = async (): Promise<IProduct[] | void> => {
    try {
        const { data } = await instanceAxios.get("/products");
        return data;
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id: number) => {
    try {
        const { data } = await instanceAxios.delete(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const productServices = {
    getAllProduct,
    deleteProduct
}