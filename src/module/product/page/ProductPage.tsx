import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../App";
import { getProducts, Product } from "../../admin/api/admin.api";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product>();
  const { id } = params;
  const cart = useContext(CartContext);
  const [active, setActive] = useState("");
  const handleUpdateCart = () => {
    cart?.addToCart(id ?? "1");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const createData = await getProducts({ ids: [id] });
        console.log(createData);
        setProduct(createData[0]);
      }
    };
    fetchData();
    console.log(id);
  }, [id]);

  return (
    <div className="flex justify-center ">
      <div className="w-3/4">
        <div>
          <p>Home</p>
        </div>
        <div className="flex h-96 gap-4">
          <div className="w-1/4">
            <img
              className="w-full h-full"
              src={product?.images_location}
              alt="product"
            />
          </div>
          <div className="w-3/4 py-2 space-y-4">
            <p>{product?.name}</p>
            <div className="space-y-3">
              <div className="flex gap-1">
                <Icon
                  icon={"fluent:star-20-filled"}
                  color="#FBBF24"
                  fontSize={20}
                />
                <Icon
                  icon={"fluent:star-20-filled"}
                  color="#FBBF24"
                  fontSize={20}
                />
                <Icon
                  icon={"fluent:star-20-filled"}
                  color="#FBBF24"
                  fontSize={20}
                />
                <Icon
                  icon={"fluent:star-20-filled"}
                  color="#FBBF24"
                  fontSize={20}
                />
                <Icon
                  icon={"fluent:star-20-filled"}
                  className="text-secondary"
                  fontSize={20}
                />
                <p>Colour: {product?.colour}</p>
                {/* <Icon icon={"fluent:star-half-20-filled"} color="#FBBF24" fontSize={20} /> */}
              </div>
              <div>${product?.price}</div>
              <div>
                <p>Availability: In Stock</p>
                <p
                  className="text-secondary w-fit
                "
                >
                  {product?.description}
                </p>
              </div>
              <div className="flex gap-3">
                <div
                onClick={() => setActive("S")}
                  className={`border ${
                    active === "S" && "bg-black text-white"
                  } hover:text-white p-2 hover:bg-black cursor-pointer`}
                >
                  S
                </div>
                <div
                onClick={() => setActive("M")}
                  className={`border ${
                    active === "M" && "bg-black text-white"
                  } hover:text-white p-2 hover:bg-black cursor-pointer`}
                >
                  M
                </div>
                <div
                onClick={() => setActive("L")}
                  className={`border ${
                    active === "L" && "bg-black text-white"
                  } hover:text-white p-2 hover:bg-black cursor-pointer`}
                >
                  L
                </div>
                <div
                onClick={() => setActive("XL")}
                  className={`border ${
                    active === "XL" && "bg-black text-white"
                  } hover:text-white p-2 hover:bg-black cursor-pointer`}
                >
                  XL
                </div>
                <div
                onClick={() => setActive("XXL")}
                  className={`border ${
                    active === "XXL" && "bg-black text-white"
                  } hover:text-white p-2 hover:bg-black cursor-pointer`}
                >
                  XXL
                </div>
              </div>
              <button
                onClick={handleUpdateCart}
                className="bg-blue p-2 text-white font-semibold w-fit rounded"
              >
                <p>Add To Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
