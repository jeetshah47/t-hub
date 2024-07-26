import { Link } from "react-router-dom";

type AvatarType = {
  initial: string;
  id: string;
};

const Avatar = ({ initial, id }: AvatarType) => {
  return (
    <Link to={`/user/${id}`}>
      <div className="bg-amber-400 rounded-full w-12 h-12 cursor-pointer flex justify-center items-center">
        <p className="text-lg font-semibold">{initial}</p>
      </div>
    </Link>
  );
};

export default Avatar;