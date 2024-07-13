type ProductCardProps = {
  path: number;
};

const ProductCard = ({ path }: ProductCardProps) => {
  return (
    <div className="py-12 px-2">
      <img className="w-60 h-96" src={`/product/${path}.png`} alt="" />
      <div className="flex flex-col py-4 space-y-3 items-center w-full justify-center">
        <p>Graphic Design</p>
        <p className="text-primary font-bold">Marvel Department</p>
        <div className="flex gap-2 font-semibold">
          <p className="text-secondary">$16.4</p>
          <p className="text-green-600">$6.4</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
