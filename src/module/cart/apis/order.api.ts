import axios from "axios";

export interface Order {
  user_id: string;
  address_id: string;
  product_ids: string[];
}

export const createOrder = async (payload: Order) => {
  const result = await axios.post("http://127.0.0.1:5000/orders", {
    ...payload,
  });

  return result.data;
};

export const fetchOrder = async () => {
  const result = await axios.get("http://127.0.0.1:5000/orders");
  return result.data;
};
