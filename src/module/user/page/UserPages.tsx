import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import UserTab from "../components/UserTab";
import UserAddress from "../components/UserAddress";
import OrderTable from "../../admin/components/order/OrderTable";
import { getLocalStorate } from "../../utils/LocalStorage";

const UserPages = () => {
  const { id } = useParams();
  const Tabs = ["Profile", "Address"];

  const [active, setActive] = useState(Tabs[0]);
  const handleActive = (tab: string) => {
    setActive(tab);
  };
  const mapUserTab: { [index: string]: React.ReactNode } = {
    Profile: <UserProfile />,
    Address: <UserAddress userId={id ?? "null"} />,
    // Orders: <OrderTable />,
  };
  

  useEffect(() => {}, [id]);

  return (
    <div className="w-full flex h-screen justify-center">
      <div className="w-3/4 flex flex-col items-center">
        {!getLocalStorate("user").email.includes("admin") && <UserTab active={active} setActive={handleActive} tabs={Tabs} />}
        <div className="flex w-full justify-center">{mapUserTab[active]}</div>
      </div>
    </div>
  );
};

export default UserPages;
