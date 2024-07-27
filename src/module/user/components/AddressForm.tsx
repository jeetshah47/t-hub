import { useState } from "react";
import { Address } from "./UserAddress";

type AddressProps = {
  onAddAddress: (params: Address) => void;
  onCancelAddress: () => void;
};

const AddressForm = ({ onCancelAddress, onAddAddress }: AddressProps) => {
  const [address, setAddress] = useState({
    country: "",
    state: "",
    street: "",
    type: "",
    user_id: "",
    zip: "",
  });

  return (
    <div className="w-full">
      <div>
        <p className="text-secondary py-1">Street</p>
        <input
          className="border outline-none rounded-md w-full py-2 px-2"
          type="text"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
      </div>
      <div>
        <p className="text-secondary py-1">State</p>
        <input
          className="border outline-none rounded-md w-full py-2 px-2"
          type="text"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
      </div>
      <div>
        <p className="text-secondary py-1">Zip</p>
        <input
          className="border outline-none rounded-md w-full py-2 px-2"
          type="text"
          value={address.zip}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        />
      </div>
      <div>
        <p className="text-secondary py-1">Country</p>
        <input
          className="border outline-none rounded-md w-full py-2 px-2"
          type="text"
          value={address.country}
          onChange={(e) => setAddress({ ...address, country: e.target.value })}
        />
      </div>
      <div>
        <p className="text-secondary py-1">Type</p>
        <input
          className="border outline-none rounded-md w-full py-2 px-2"
          type="text"
          value={address.type}
          onChange={(e) => setAddress({ ...address, type: e.target.value })}
        />
      </div>

      <div className="flex py-4 gap-4 items-center">
        <button
          onClick={() => onAddAddress(address)}
          className="py-3 w-full bg-purple-500 rounded text-white font-bold"
        >
          Add Address
        </button>
        <button
          onClick={onCancelAddress}
          className="py-3 w-full border border-purple-500 rounded  font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
