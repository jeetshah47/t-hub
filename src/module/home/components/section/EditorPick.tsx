import { Link } from "react-router-dom";
import ProductCard from "../../../common/product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../../admin/api/admin.api";
import { Icon } from "@iconify/react";
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
    <div className="flex items-center justify-center pt-10">
      <div className="w-3/4">
        <div className="flex items-center flex-col space-y-3">
          <p>Featured Products</p>
          <p className="text-2xl font-semibold">BESTSELLER PRODUCTS</p>
        </div>
        <div>
          <p className="font-semibold text-lg">Filters</p>
          <div>
            <div className="flex gap-2 items-center">
              <Icon icon={"mdi:color"} />
              <input
                placeholder="Colour"
                className="border outline-none rounded-md  px-2"
              />

              <div className="flex gap-3 items-center">
                <div>
                  <label htmlFor="series">Series</label>
                  <input
                    onChange={(e) => {
                      if (e.target.checked)
                        setFilter({
                          ...filter,
                          types: [
                            "Breaking Bad",
                            "Stranger Things",
                            "Game of Thrones",
                            "The Boys",
                          ],
                        });
                    }}
                    type="checkbox"
                    id="series"
                  />
                </div>
                <div>
                  <label htmlFor="movies">Movies</label>
                  <input
                    onChange={(e) => {
                      if (e.target.checked)
                        setFilter({
                          ...filter,
                          types: ["Marvel", "DC", "Star Wars", "Incredibles"],
                        });
                    }}
                    type="checkbox"
                    id="movies"
                  />
                </div>
                <div>
                  <label htmlFor="anime">Anime</label>
                  <input
                    onChange={(e) => {
                      if (e.target.checked)
                        setFilter({
                          ...filter,
                          types: [
                            "Death Note",
                            "Fullmetal Alchemist",
                            "Naruto",
                            "Attack on Titan",
                          ],
                        });
                    }}
                    type="checkbox"
                    id="anime"
                  />
                </div>
              </div>

              <span>Min</span>
              <input
                type="range"
                value={filter.price_range[1]}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    price_range: [e.target.value, ...filter.price_range],
                  })
                }
                maxLength={1000}
                placeholder="Price"
                className="border outline-none rounded-md  px-2"
              />
              <span>{parseInt(filter.price_range[1]) * 5}</span>
              <button
                onClick={handleApplyFilter}
                className="px-4 bg-black text-white mx-3"
              >
                Apply Filter
              </button>
              <button
                onClick={handleReset}
                className="px-4 bg-black text-white mx-3"
              >
                Reset
              </button>
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
