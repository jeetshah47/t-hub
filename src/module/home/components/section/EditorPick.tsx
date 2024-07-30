import { Link } from "react-router-dom";
import ProductCard from "../../../common/product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../../admin/api/admin.api";
import Filter from "./Filter";
const EditorPick = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [reset, setReset] = useState(false);
  const [filter, setFilter] = useState({
    colours: "",
    types: [""],
    price_range: ["0", "0"],
  });

  const handleApplyFilter = async () => {
    const data = await getProducts({
      colours: filter.colours,
      types: filter.types,
      price_range: [
        parseInt(filter.price_range[0]),
        parseInt(filter.price_range[1]),
      ],
    });
    console.log(data);
    setProducts(data);
  };

  const handleReset = () => {
    setFilter({ colours: "", types: [], price_range: ["0", "0"] });
    setReset(!reset);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts({});
      console.log(data);
      setProducts(data);
    };
    setTimeout(() => fetchData(), 1500);
  }, [reset]);

  return (
    <div className="flex  justify-center pt-10">
      <div className="w-1/6 ">
        <Filter
          handleApplyFilter={handleApplyFilter}
          handleReset={handleReset}
          filters={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="w-2/4">
        <div className="flex items-center flex-col space-y-3">
          <p>Featured Products</p>
          <p className="text-2xl font-semibold">BESTSELLER PRODUCTS</p>
        </div>
        <div>
          <p className="font-semibold text-lg">Filters</p>
          <div>
            <div className="flex gap-2 items-center">
              {/* <span>Max</span>
              <input
                type="range"
                value={filter.price_range[1]}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    price_range: [...filter.price_range, e.target.value],
                  })
                }
                maxLength={1000}
                placeholder="Price"
                className="border outline-none rounded-md  px-2"
              />
              <span>{parseInt(filter.price_range[1]) * 5}</span> */}
            </div>
          </div>
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
