import { useState } from "react";
import ViewProduct from "../components/product/ViewProduct";
import ProductForm from "../components/product/ProductForm";

const OperationPage = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="w-full py-4 flex justify-center items-center">
      <div className="w-2/3 p-2">
        <div className="w-full py-3 flex justify-between">
          <p className="text-2xl">Product List</p>
          <button
            onClick={handleShowForm}
            className="py-2 px-4 rounded bg-black text-white font-semibold"
          >
            {!showForm ? "Add Product" : "Cancel"}
          </button>
        </div>
        {showForm ? (
          <ProductForm onSubmit={() => setShowForm(false)} />
        ) : (
          <ViewProduct />
        )}
      </div>
    </div>
  );
};

export default OperationPage;
