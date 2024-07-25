type UserTabProps = {
  active: string;
  tabs: string[];
  setActive: (tab: string) => void;
};

const UserTab = ({ tabs, setActive, active }: UserTabProps) => {
  return (
    <div className=" flex gap-6">
      {tabs.map((tab) => (
        <div
          onClick={() => setActive(tab)}
          key={tab}
          className={`py-2 px-1 border-b-2 cursor-pointer ${
            active === tab ? "border-purple-800 text-purple-700 font-bold" : ""
          } `}
        >
          <p>{tab}</p>
        </div>
      ))}
    </div>
  );
};

export default UserTab;
