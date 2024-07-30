import { useEffect, useState } from "react";
import { getLocalStorate } from "../../utils/LocalStorage";
import { UserData } from "../../login/apis/login.api";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState<UserData>();

  useEffect(() => {
    const userData = getLocalStorate("user");
    console.log(userData);
    setUserDetails(userData);
  }, []);

  return (
    <div>
      <div className="py-6">
        <p className="text-2xl font-bold">About Yourself</p>
      </div>
      <form>
        <div className="gap-8 items-center">
          <div className="w-full flex gap-3">
            <div>
              <p className="text-secondary py-1">First Name</p>
              <input
                className="border outline-none rounded-md w-full py-2 px-2"
                type="text"
                value={userDetails?.first_name}
              />
            </div>
            <div className="py-3" />
            <div>
              <p className="text-secondary py-1">Last Name</p>
              <input
                className="border outline-none rounded-md w-full py-2 px-2"
                type="text"
                value={userDetails?.last_name}
              />
            </div>
          </div>
          <div className="py-3" />

          <div>
            <p className="text-secondary py-1">Email</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              type="text"
              value={userDetails?.email}
            />
          </div>
          <div className="py-3" />

          <div>
            <p className="text-secondary py-1">Phone Number</p>
            <input
              className="border outline-none rounded-md w-full py-2 px-2"
              type="text"
              value={userDetails?.phone_number}
            />
          </div>
          <div className="py-3" />
         
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
