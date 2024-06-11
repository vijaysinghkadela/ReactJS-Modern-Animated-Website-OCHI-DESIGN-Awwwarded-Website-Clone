function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-NeueMontreal text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap5  border-t-[2px] pt-10  mt-20 border-[#222b2191] bg-[#CDEA68]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex items-center justify-between gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white uppercase ">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-[45vw] h-[60vh] rounded-3xl bg-[#a0b849] overflow-hidden ">
        <img className="w-full h-full object-fit " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default About;
