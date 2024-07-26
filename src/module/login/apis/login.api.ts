import axios from "axios";

export interface UserData {
  email: string;
  first_name: string;
  id?: string;
  last_name: string;
  password: string;
  phone_number: string;
}

export const loginUser = async (payload: {
  email: string;
  password: string;
}): Promise<UserData> => {
  const result = await axios.post("http://localhost:5000/login/user", {
    ...payload,
  });

  return result.data;
};

export const signupUser = async (payload: UserData): Promise<UserData> => {
  const result = await axios.post("http://localhost:5000/user", {
    ...payload,
  });

  return result.data;
};
