import { useEffect, useState } from "react";
import { useLocation, useParams, useRoutes } from "react-router-dom";
import { fetchOrders, Order, updateOrders } from "../../api/admin.api";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<Order>();
  const status = ["Placed", "Shipped", "Delivered", "Refunded"];
  const [reload, setReload] = useState(false);
  const path = useLocation();

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      if (path.pathname.includes("admin")) {
        const data = await fetchOrders({ orderId: id });
        console.log(data);
        setOrder(data[0]);
      } else {
        const data = await fetchOrders({ userId: id });
        console.log(data);
        setOrder(data[0]);
      }
    };
    fetchData();
  }, [id, reload, path]);

  const handleCallApi = async (orderItemId: string, status: string) => {
    try {
      const data = await updateOrders({
        orderItemId: orderItemId,
        status: status,
      });
      alert("Order Updated Successfully");
      console.log(data);
      setReload(!reload);
    } catch (error) {
      alert("Order Updated Failed");

      console.log(error);
    }
  };

  const handleChangeStatus = (orderItemId: string, status: string) => {
    if (status === "Order Placed") {
      const bool = confirm("Do you want to change the status to Order Shipped");
      if (bool) handleCallApi(orderItemId, "Order Shipped");
    } else if (status === "Order Shipped") {
      const bool = confirm(
        "Do you want to change the status to Order Delivered"
      );
      if (bool) handleCallApi(orderItemId, "Order Delivered");
    } else if (status === "Order Delivered") {
      const bool = confirm(
        "Do you want to change the status to Order Refunded"
      );
      if (bool) handleCallApi(orderItemId, "Order Refunded");
    }
  };

  //bg-[#D0D5DD]
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-1/2">
        {order?.items.map((item) => (
          <div key={item.order_item_id} className="py-3 border-b-2">
            <div className="flex items-center gap-5">
              {item.tracks.map((track) => (
                <div key={track.status} className="flex flex-col items-center">
                  <p>{track.status}</p>
                  <div className={"w-3 h-3 rounded-full bg-green-500 "} />
                  <p>{track.Time}</p>
                </div>
              ))}
            </div>
            <div className="py-2">
              <div className="flex gap-4">
                <div>
                  <img alt="NV" src="/product/1.png" width={50} height={50} />
                </div>
                <p className="text-lg text-secondary">
                  Name: {item.product.name}
                </p>
                <p className="text-lg text-secondary">
                  Colour: {item.product.colour}
                </p>
                <p className="text-lg text-secondary">
                  Description: {item.product.description}
                </p>
              </div>
            </div>
            <div>
              {path.pathname.includes("admin") && (
                <button
                  onClick={() =>
                    handleChangeStatus(
                      item.order_item_id,
                      item.tracks[0].status
                    )
                  }
                  disabled={item.tracks.length === 4}
                  className="py-1 px-2 bg-black rounded text-white"
                >
                  Change Status
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;

/**{index[0] !== -1 && (
          <Modal title="Order Details">
            <div className="py-2">
              <p>Address</p>
              <div className="border-b-2">
                <p>{orders[index[0]].address.street}</p>
                <p>{orders[index[0]].address.state}</p>
                <p>{orders[index[0]].address.country}</p>
                <p>{orders[index[0]].address.type}</p>
                <p>{orders[index[0]].address.zip}</p>
              </div>
              <div>
                <p>Order Status : {status ? orders[index[0]].items[index[1]].tracks[  ]}</p>
                // <div className="flex justify-between">
                //   <button
                //     className={`py-1 px-2 bg-black text-white rounded`}
                //     onClick={() => setStatus("Order Placed")}
                //   >
                //     Placed
                //   </button>
                //   <button
                //     className={`py-1 px-2 bg-black text-white rounded`}
                //     onClick={() => setStatus("Order Shipped")}
                //   >
                //     Shipped
                //   </button>
                //   <button
                //     className={`py-1 px-2 bg-black text-white rounded`}
                //     onClick={() => setStatus("Order Delivered")}
                //   >
                //     Delivered
                //   </button>
                //   <button
                //     className={`py-1 px-2 bg-black text-white rounded`}
                //     onClick={() => setStatus("Order Refunded")}
                //   >
                //     Refunded
                //   </button>
                // </div>
              </div>
            </div>
          </Modal> */
