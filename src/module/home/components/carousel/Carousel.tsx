const Carousel = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/spidy.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="w-full h-svh flex items-center justify-center"
    >
        <div className="text-white w-2/3  my-6">
            <p className="text-5xl font-bold">New Collection</p>
            <p>We know how large objects will act, 
            but things on a small scale.</p>
            <div className="py-2 px-4  w-fit bg-[#2DC071] rounded">
                <p className="text-lg font-bold">Shop Now</p>
            </div>
        </div>
    </div>
  );
};

export default Carousel;
