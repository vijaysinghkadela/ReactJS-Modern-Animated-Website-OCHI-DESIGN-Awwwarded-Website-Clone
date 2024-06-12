function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-NeueMontreal tracking-tight">
          Featured Prjects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards gap-10 mt-20 w-full flex items-center justify-between">
          <div className="cardContainer relative w-1/2 h-[75vh]  ">
            <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none z-[9] text-8xl font-['Bebas Neue'] ">
              {"FYDE".split("").map((item, index) => (
                <>
                  <span key={index}>{item}</span>
                </>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl  overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardContainer  w-1/2 h-[75vh]  ">
            <div className="card w-full h-full rounded-xl relative overflow-hidden">
              <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none z-[9] text-8xl font-['Bebas Neue'] ">
                {"VISE".split("").map((item, index) => (
                  <>
                    <span key={index}>{item}</span>
                  </>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
