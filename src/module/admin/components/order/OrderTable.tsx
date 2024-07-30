import { useEffect, useState } from "react";
import { fetchOrders, Order } from "../../api/admin.api";
import { useNavigate } from "react-router-dom";

const OrderTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders({});
      console.log(data);
      setOrders(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-2/3 p-2">
      <div className="w-full">
        <p className="text-2xl">Order Page</p>
      </div>
      <div className="py-2 w-full">
        {orders.map((or) => (
          <div>
            <p className="text-xl font-semibold text-secondary">
              Order #{or.id}
            </p>
            <table className="table-fixed border-collapse	text-center w-full">
              <thead className=" text-secondary bg-gray-50">
                <tr>
                  <th>Order Id</th>
                  <th>Order Number</th>
                  <th>Status</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {or.items.map((to, index) => (
                  <tr key={index} className="border-b py-3">
                    <td className="py-4 text-secondary">
                      {to.order_item_id.split("-")[0]}
                    </td>
                    <td className="py-4 text-secondary">{to.product.name}</td>
                    <td className="py-4 flex justify-center">
                      {" "}
                      <p className="bg-status-green w-fit py-1 px-4 rounded">
                        {to.tracks[0].status}
                      </p>
                    </td>
                    <td className="py-4">{to.product.description}</td>
                    <td className="py-4">{or.user.first_name}</td>
                    <td className="py-4">
                      <button
                        onClick={() => navigate(`/admin/orders/${or.id}`)}
                        className="py-2 px-2 bg-black text-white"
                      >
                        Update Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default OrderTable;
