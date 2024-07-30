import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App";
import { getProducts, Product } from "../../admin/api/admin.api";
import { Address } from "../../user/components/UserAddress";
import { fetchAddress } from "../../user/apis/UserApis";
import { useNavigate, useParams } from "react-router-dom";
import { createOrder } from "../apis/order.api";

const CartPage = () => {
  const cart = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [address, setaddress] = useState<Address[]>([]);

  const [currentAddress, setCurrent] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const findProductCount = (id?: string) => {
    if (id) return cart?.cartItems.filter((product) => product === id).length;
  };

  const handleDecrement = (id?: string) => {
    if (id) {
      const count =
        cart?.cartItems.filter((product) => product === id).length ?? 0;
      console.log(cart?.cartItems);

      const newClone = cart?.cartItems.filter((ids) => ids !== id) ?? [];
      for (let i = 0; i < count - 1; i++) {
        newClone?.push(id);
      }
      console.log(count, id);

      console.log(newClone);

      cart?.addCart([...newClone]);
    }
  };

  const handleIncrement = (id?: string) => {
    if (id) cart?.addToCart(id);
  };

  const handleTotalAmount = () => {
    let total = 0;
    products.map((p) => {
      const c = findProductCount(p.id);
      if (c) if (p) total += p.price * c;
    });
    return total;
  };

  const handlePlaceOrder = async () => {
    if (!currentAddress) {
      alert("Select Address");
      return;
    }
    try {
      if (id && cart?.cartItems && currentAddress) {
        const place = await createOrder({
          user_id: id,
          address_id: currentAddress,
          product_ids: cart?.cartItems,
        });
        console.log(place);
        alert("Order Placed Successfully");
        cart.addCart([]);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Order Placed Failed");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const datas = await getProducts({ ids: cart?.cartItems });
      console.log(datas);
      setProducts(datas);
    };
    if (cart?.cartItems.length) fetchData();
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const datas = await fetchAddress(id);
        setaddress(datas);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="w-2/4">
        <table className="table-fixed border-collapse	text-center w-full">
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b py-3">
                <td className="py-4 text-secondary">
                  <img className="h-36 w-30" src={"/product/1.png"} alt="NA" />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="border mx-2 w-7  h-7 rounded bg-secondary"
                  >
                    -
                  </button>
                  {findProductCount(product.id)}
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="border mx-2 w-7  h-7 rounded bg-secondary"
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && "Please add some products"}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F0F6F5] w-1/6 h-full p-4">
        <p className="font-semibold text-lg text-secondary">Total Amount</p>
        <p className="font-semibold text-2xl">${handleTotalAmount()}</p>
        <div className="py-4">
          <p className="font-semibold text-secondary text-lg">Select Address</p>
          {address.map((add) => (
            <p
              onClick={() => setCurrent(add.id ?? "")}
              key={add.id}
              className={`border-b py-2 cursor-pointer hover:bg-[#CFE7E5] ${
                currentAddress === add.id && "bg-[#CFE7E5]"
              }`}
            >
              {add.street}, {add.state}, {add.country}, {add.type}, {add.zip}
            </p>
          ))}
        </div>
        <div className="py-3">
          <p>Payment Mode: COD </p>
        </div>
        <div className="py-2">
          {products.length === 0 &&
            address.length === 0 &&
            "Please add Address from profile section"}
          {products.length && address.length !== 0 && (
            <button
              onClick={handlePlaceOrder}
              className="py-2 px-4 bg-blue text-white text-center w-full"
            >
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
