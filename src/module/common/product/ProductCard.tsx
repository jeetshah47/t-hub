import { Product } from "../../admin/api/admin.api";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="py-12 px-2">
      <img
        className="w-60 h-96"
        src={`${product.images_location}`}
        alt=""
      />
      <div className="flex flex-col py-4 space-y-3 items-center w-full justify-center">
        <p>{product.name}</p>
        <p className="text-primary font-bold">{product.description}</p>
        <p className="text-primary font-bold">{product.colour}</p>
        <div className="flex gap-2 font-semibold">
          <p className="text-secondary">{product.type}</p>
          <p className="text-green-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
