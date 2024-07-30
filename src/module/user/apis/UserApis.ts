import axios from "axios";
import { Address } from "../components/UserAddress";

export const fetchAddress = async (userId: string): Promise<Address[]> => {
  const result = await axios.get(`http://localhost:5000/address/${userId}`);
  return result.data;
};

export const addAddress = async (payload: Address): Promise<Address> => {
  const result = await axios.post("http://localhost:5000/address", {
    ...payload,
  });

  return result.data;
};

export const deleteAddress = async (id: string) => {
  const result = await axios.delete(`http://localhost:5000/address/${id}`);

  return result.data;
};
