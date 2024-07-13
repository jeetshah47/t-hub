import ProductCard from "../../../common/product/ProductCard";

const EditorPick = () => {
  const count = Array.from({ length: 8 }, (value, index) => index + 1);
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-3/4">
        <div className="flex items-center flex-col space-y-3">
          <p>Featured Products</p>
          <p className="text-2xl font-semibold">BESTSELLER PRODUCTS</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {count.map((id) => (
            <ProductCard path={id} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
