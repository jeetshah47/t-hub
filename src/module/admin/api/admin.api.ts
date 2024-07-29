import axios from "axios";

export interface Product {
  name: string;
  description: string;
  colour: string;
  type: string;
  images_location: string;
  price: number;
  id?: string;
}

export interface Payload {
  colours?: string[];
  types?: string[];
  price_range?: number[];
  ids?: string[];
}

export const addProduct = async (payload: Product) => {
  const result = await axios.post("http://127.0.0.1:5000/product", {
    ...payload,
  });

  return result.data;
};

export const getProducts = async (payload: Payload) => {
  const result = await axios.post("http://127.0.0.1:5000/product/get", {
    ...payload,
  });
  return result.data;
};
