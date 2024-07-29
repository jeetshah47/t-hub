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
    <div className="flex justify-center h-screen">
      <div className="w-3/4">
        <div>
          <p>Home</p>
        </div>
        <div className="flex h-96 gap-4">
          <div className="w-1/4">
            <img className="w-full h-full" src={product?.images_location} alt="product" />
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
