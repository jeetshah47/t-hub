import { Link } from "react-router-dom";
import ProductCard from "../../../common/product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../../admin/api/admin.api";

const EditorPick = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts({});
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-3/4">
        <div className="flex items-center flex-col space-y-3">
          <p>Featured Products</p>
          <p className="text-2xl font-semibold">BESTSELLER PRODUCTS</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} key={product.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
