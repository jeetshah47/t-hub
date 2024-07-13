import axios from "axios";

interface UserData {
  access_token: string;
  user: {
    email: string;
    isGithubAuth: boolean;
    isGoogleAuth: boolean;
    name: string;
    password: string;
    profileImg: string;
  };
}

export const loginUser = async (payload: {
  email: string;
  password: string;
}): Promise<UserData> => {
  const result = await axios.post("http://localhost:3000/api/auth/login", {
    ...payload,
  });

  return result.data;
};
