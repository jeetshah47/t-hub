import { Route, Routes } from "react-router-dom";
import Footer from "./module/common/footer/Footer";
import NavBar from "./module/common/navbar/nav";
import HomePage from "./module/home/page/HomePage";
import ProductPage from "./module/product/page/ProductPage";

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-initial justify-center flex">
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
