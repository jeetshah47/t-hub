import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();

  const { id } = params;

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <div>
          <p>Home</p>
        </div>
        <div className="flex h-96 gap-4">
          <div className="w-1/4">
            <img
              className="w-full h-full"
              src={`/product/${id}.png`}
              alt="product"
            />
          </div>
          <div className="w-3/4 py-2 space-y-4">
            <p>Deadpool Fan Tee</p>
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
                <p>10 Reviews</p>
                {/* <Icon icon={"fluent:star-half-20-filled"} color="#FBBF24" fontSize={20} /> */}
              </div>
              <div>$1230.00</div>
              <div>
                <p>Availability: In Stock</p>
                <p
                  className="text-secondary w-fit
                "
                >
                  Unleash your inner superhero with our Marvel Avengers Graphic
                  T-Shirt. This officially licensed tee features a vibrant and
                  detailed graphic of your favorite Avengers, including Iron
                  Man, Captain America, Thor, and Hulk, in action-packed poses.
                  Made from 100% high-quality cotton, this T-shirt offers
                  comfort and durability for everyday wear. The bold colors and
                  striking design make it a standout piece in any Marvel fan's
                  wardrobe. Perfect for casual outings, movie nights, or comic
                  conventions, this T-shirt is a must-have for any Avengers
                  enthusiast. Available in various sizes to ensure the perfect
                  fit.
                </p>
              </div>
              <button className="bg-blue p-2 text-white font-semibold w-fit rounded">
                <p>Select Options</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
