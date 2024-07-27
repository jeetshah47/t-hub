import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Avatar from "../avatar/avatar";
import { UserData } from "../../login/apis/login.api";
import { getLocalStorate, clearStorage } from "../../utils/LocalStorage";
import { CartContext } from "../../../App";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const path = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>();
  const cartData = useContext(CartContext);

  const handleCartButton = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    clearStorage();
    navigate("/auth/login");
  };

  useEffect(() => {
    if (path.pathname.includes("login")) setShow(false);
    else setShow(true);
  }, [path]);

  useEffect(() => {
    const userDetails = getLocalStorate("user");
    if (userDetails) setUserData(userDetails);
  }, []);

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
          <div onClick={handleCartButton} className="relative">
            <Icon fontSize={"24px"} icon={"bytesize:cart"} />
            <div className="absolute top-5 left-5 rounded-full bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center">
              <p className="font-semibold">{cartData?.cartItems.length}</p>

            </div>
          </div>
          {userData && (
            <div>
              <Avatar
                initial={userData.first_name[0] + userData.last_name[0]}
                id={userData.id ?? ""}
              />
            </div>
          )}
          <div>
            {!userData && (
              <Link to={"/auth/login"}>
                <span className="text-blue hover:cursor-pointer">
                  Login/Signup
                </span>
              </Link>
            )}
          </div>
          <div></div>
          <div>
            {userData?.first_name === "admin" && (
              <Link to={"/admin/orders"}>
                <span className="text-blue hover:cursor-pointer">
                  View Orders
                </span>
              </Link>
            )}
          </div>
          <div>
            {userData && (
              <div onClick={handleLogout}>
                <span className="text-blue hover:cursor-pointer">Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
