type AvatarType = {
  initial: string;
};

const Avatar = ({ initial }: AvatarType) => {
  return (
    <div className="bg-amber-400 rounded-full w-12 h-12 cursor-pointer flex justify-center items-center">
      <p className="text-lg font-semibold">{initial}</p>
    </div>
  );
};

export default Avatar;
