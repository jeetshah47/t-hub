import { Route, Routes } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";
import Illutration from "../components/illustration/Illutration";
import SignupForm from "../components/form/SignupForm";

const LoginPage = () => {

  return (
    <div className="w-full h-full flex">
      <Illutration />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
};

export default LoginPage;
