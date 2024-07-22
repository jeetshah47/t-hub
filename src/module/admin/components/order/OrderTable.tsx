const OrderTable = () => {
  const orderList = [
    {
      id: 123,
      number: 2134,
      status: "New",
      item: 2,
      customer: "Carlos",
    },
    {
      id: 123,
      number: 2134,
      status: "New",
      item: 2,
      customer: "Carlos",
    },
    {
      id: 123,
      number: 2134,
      status: "New",
      item: 2,
      customer: "Carlos",
    },
    {
      id: 123,
      number: 2134,
      status: "New",
      item: 2,
      customer: "Carlos",
    },
    {
      id: 123,
      number: 2134,
      status: "New",
      item: 2,
      customer: "Carlos",
    },
  ];

  return (
    <div className="w-2/3 p-2">
      <div className="w-full">
        <p className="text-2xl">Order Page</p>
      </div>
      <div className="py-2 w-full">
        <div>
          <table className="table-fixed border-collapse	text-center w-full">
            <thead className=" text-secondary bg-gray-50">
              <tr>
                <th>Order Id</th>
                <th>Order Number</th>
                <th>Status</th>
                <th>Item</th>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order, index) => (
                <tr key={index} className="border-b py-3">
                  <td className="py-4 text-secondary">{order.id}</td>
                  <td className="py-4 text-secondary">{order.number}</td>
                  <td className="py-4 flex justify-center">
                    {" "}
                    <p className="bg-status-green w-fit py-1 px-4 rounded">{order.status}</p>
                  </td>
                  <td className="py-4">{order.item}</td>
                  <td className="py-4">{order.customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
