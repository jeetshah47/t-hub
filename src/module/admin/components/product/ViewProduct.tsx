import { useEffect, useState } from "react";
import { deleteProduct, getProducts, Product } from "../../api/admin.api";

const ViewProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleDeleteProduct = async (id: string) => {
    const bool = confirm("Do you delete this product ?");
    if (bool) {
      try {
        const data = await deleteProduct(id);
        console.log(data);
        alert("Product Removed Successfully");
        window.location.reload();
      } catch (error) {
        alert("Cannot delete Product");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts({});
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full p-2">
      <div className="py-2 w-full">
        <div>
          <table className="table-fixed border-collapse	text-center w-full">
            <thead className=" text-secondary bg-gray-50">
              <tr>
                <th>name</th>
                <th>description</th>
                <th>colour</th>
                <th>type</th>
                <th>images_location</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b py-3">
                  <td className="py-4 text-secondary">{product.name}</td>
                  <td className="py-4 text-secondary">{product.description}</td>
                  <td className="py-4 flex justify-center">
                    {" "}
                    <p className={` w-fit py-1 px-4 rounded`}>
                      {product.colour}
                    </p>
                  </td>
                  <td className="py-4">{product.type}</td>
                  <td className="py-4">
                    <img
                      src={product.images_location}
                      width={50}
                      height={50}
                      alt="NA"
                    />
                  </td>
                  <td className="py-4">{product.price}</td>
                  <td className="py-4">
                    <button
                      onClick={() => handleDeleteProduct(product.id ?? "")}
                      className="py-2 px-4 bg-black text-white"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
