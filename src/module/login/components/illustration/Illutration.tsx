const Illutration = () => {
  return (
    <div className="w-2/5 bg-blue flex items-center justify-center">
        <div
          className=" border-white rounded-full relative items-center flex justify-center"
          style={{
            backgroundImage: "linear-gradient(95deg, #0F70DA 0%, #007AFF 100%)",
            height: "420px",
            width: "420px",
          }}
        >
            <picture>
                <img width={"315px"} height={"515px"} src="/auth.png" alt="mo" />
            </picture>
        </div>
      </div>
  )
}

export default Illutration