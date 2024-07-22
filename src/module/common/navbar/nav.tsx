import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const path = useLocation();
  const navigate = useNavigate();

  const handleCartButton = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (path.pathname.includes("login")) setShow(false);
    else setShow(true);
  }, [path]);

  return (
    <div className={`flex-initial  w-3/5 py-4 ${!show && "hidden"}`}>
      <div className={`flex flex-1 justify-between items-center max-sm:hidden`}>
        <div>
          <p className="font-bold text-2xl">T Hub</p>
        </div>
        <div className="flex flex-1 justify-center items-center gap-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Shop</Link>
          <Link to={"/product/1"}>Contact</Link>
        </div>
        <div className="flex items-center gap-10">
          <div onClick={handleCartButton}>
            <Icon icon={"bytesize:cart"} />
          </div>
          <Icon icon={"iconamoon:profile-circle-light"} />
          <div>
            <Link to={"/auth/login"}>
              <span className="text-blue hover:cursor-pointer">
                Login/Signup
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
