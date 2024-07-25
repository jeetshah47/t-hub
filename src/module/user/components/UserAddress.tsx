import { useEffect, useState } from "react";
import { fetchAddress } from "../apis/UserApis";

export interface Address {
  country: string;
  id?: string;
  state: string;
  street: string;
  type: string;
  user_id: string;
  zip: string;
}

type UserAddressProps = {
  userId: string;
};

const UserAddress = ({ userId }: UserAddressProps) => {
  const [addresses, setAddress] = useState<Address[]>();

  useEffect(() => {
    const fetchData = async () => {
      const addresses = await fetchAddress(userId);
      console.log(addresses);
      setAddress(addresses);
    };
    fetchData();
  }, [userId]);

  return (
    <div className="w-2/4">
      <div className="py-6">
        <p className="text-2xl font-bold">Update Address</p>
      </div>
      {addresses?.map((address, index) => (
        <div key={address.id} className="w-full border-b">
          <p>Address #{index + 1}</p>
          <div className="flex gap-3">
            <p>
              <span className="font-bold">Type</span>: {address.type}
            </p>
            <p>
              <span className="font-bold">Street</span>: {address.street}
            </p>
            <p>
              <span className="font-bold">Zip</span>: {address.zip}
            </p>
            <p>
              <span className="font-bold">State</span>: {address.state}
            </p>
            <p>
              <span className="font-bold">Country</span>: {address.country}
            </p>
          </div>
        </div>
      ))}

      <div className="w-full py-5">
        <button className="py-2 w-full bg-purple-700 text-white font-semibold px-2 rounded">Add Address</button>
      </div>
    </div>
  );
};

export default UserAddress;
