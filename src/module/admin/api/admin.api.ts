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
  colours?: string;
  types?: string[];
  price_range?: number[];
  ids?: string[];
}

export interface Order {
  address: {
    address_id: "";
    country: "";
    state: "";
    street: "";
    type: "";
    zip: "";
  };
  id: "";
  items: {
    order_item_id: "";
    product: {
      colour: "";
      description: "";
      name: "";
      product_id: "";
    };
    tracks: {
      Time: "";
      order_track_id: "";
      status: "";
    }[];
  }[];

  payment_method: "COD";
  user: {
    email: null;
    first_name: null;
    last_name: null;
    phone_number: null;
    user_id: null;
  };
}

export interface OrderPayload {
  orderId?: string;
  userId?: string;
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

export const fetchOrders = async (payload: OrderPayload) => {
  const result = await axios.post("http://127.0.0.1:5000/orders/get", {
    ...payload,
  });
  return result.data;
};

export const updateOrders = async (payload: {
  orderItemId: string;
  status: string;
}) => {
  const result = await axios.put("http://127.0.0.1:5000/orders", {
    ...payload,
  });
  return result.data;
};
