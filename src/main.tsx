import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./module/login/components/form/LoginForm.tsx";
import SignupForm from "./module/login/components/form/SignupForm.tsx";
import App from "./App.tsx";
import LoginPage from "./module/login/page/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <LoginPage />,
    children: [
      {
        path: "/auth/login",
        element: <LoginForm />,
      },
      {
        path: "/auth/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
