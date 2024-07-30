import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./module/login/components/form/LoginForm.tsx";
import SignupForm from "./module/login/components/form/SignupForm.tsx";
import App from "./App.tsx";
import LoginPage from "./module/login/page/LoginPage.tsx";
import ProductPage from "./module/product/page/ProductPage.tsx";
import ViewOrderPage from "./module/admin/page/ViewOrderPage.tsx";
import UserPages from "./module/user/page/UserPages.tsx";
import OperationPage from "./module/admin/page/OperationPage.tsx";
import CartPage from "./module/cart/page/CartPage.tsx";
import OrderDetails from "./module/admin/components/order/OrderDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/user/:id",
        element: <UserPages />,
      },
      {
        path: "/user/orders/:id",
        element: <OrderDetails />,
      },
      {
        path: "/cart",
        children: [
          {
            path: "/cart/:id",
            element: <CartPage />,
          },
        ],
      },
      {
        path: "/admin",
        children: [
          {
            path: "/admin/orders",
            element: <ViewOrderPage />,
          },

          {
            path: "/admin/products",
            element: <OperationPage />,
          },
          {
            path: "/admin/orders/:id",
            element: <OrderDetails />,
          },
        ],
      },
    ],
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
        path: "/auth/admin",
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
