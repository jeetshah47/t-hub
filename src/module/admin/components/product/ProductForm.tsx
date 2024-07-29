import { useState } from "react";
import { uploadFiles } from "../../../utils/Firebase";
import { addProduct } from "../../api/admin.api";

type ProductFormProps = {
  onSubmit: () => void
}

const ProductForm = ({onSubmit}:ProductFormProps) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    colour: "",
    type: "",
    images_location: "",
    price: 0,
  });

  const [image, setImage] = useState<File>();

  const handleUploadImage = async () => {
    if (image) {
      const result = await uploadFiles(image);
      if (result) {
        setProduct({
          ...product,
          images_location: `https://firebasestorage.googleapis.com/v0/b/doorhub-2bd7c.appspot.com/o/${result}?alt=media`,
        });
      }
      alert("Image Uploaded Successfully");
    }
  };

  const handleAddProduct = async () => {
    try {
      const create = await addProduct(product);
      console.log(create);
      alert("Product Added Successfully");
      onSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddProduct();
  };

  return (
    <div className="w-full py-4 flex justify-center items-center">
      <div className="w-2/4">
        <p className="py-4 font-semibold text-xl">Add Products</p>
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-secondary py-1">Name</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div>
            <p className="text-secondary py-1">Description</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              type="text"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>
          <div>
            <p className="text-secondary py-1">Colour</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              value={product.colour}
              onChange={(e) =>
                setProduct({ ...product, colour: e.target.value })
              }
            />
          </div>
          <div>
            <p className="text-secondary py-1">Type</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              type="text"
              value={product.type}
              onChange={(e) => setProduct({ ...product, type: e.target.value })}
            />
          </div>
          <div className=" ">
            <div className="flex-1">
              <p className="text-secondary py-1">Image</p>
              <div className="flex gap-2 items-center">
                <input
                  className="border outline-none rounded-md w-full py-2 px-2"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleUploadImage}
                  className="bg-black rounded-md text-white"
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-secondary py-1">Price</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              type="text"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: Number(e.target.value) })
              }
            />
          </div>
          <div className="py-3">
            <button type="submit" className="py-2 px-4 w-full bg-black text-white text-center rounded">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
