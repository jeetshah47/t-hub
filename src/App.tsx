import { Route, Routes } from "react-router-dom";
import Footer from "./module/common/footer/Footer";
import NavBar from "./module/common/navbar/nav";
import HomePage from "./module/home/page/HomePage";
import ProductPage from "./module/product/page/ProductPage";
import ViewOrderPage from "./module/admin/page/ViewOrderPage";
import UserPages from "./module/user/page/UserPages";
import { createContext, useState } from "react";

interface CartContextType {
  cartItems: string[];
  addToCart: (item: string) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
function App() {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <CartContext.Provider value={{ cartItems, addToCart }}>
        <div className="flex-initial justify-center flex">
          <NavBar />
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin/orders" element={<ViewOrderPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/user/:id" element={<UserPages />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default App;

export { CartContext };
