import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 "></div>
      {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
        return (
          <>
            <div className="masker">
              <div className="w-fit flex items-center mx-20 overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0, marginX: 0 }}
                    animate={{ width: "8vw", marginX: "3vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.5vw] 
                 relative rounded-md bg-red-600 overflow-hidden"
                  >
                    <img
                      className="w-full h-full bg-cover "
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-bold font-['Bebas Neue']">
                  {item}
                </h1>
              </div>
            </div>
          </>
        );
      })}
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private Companies",
          "From the first pitch to the last pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center justify-between gap-5">
          <div className="uppercase flex gap-5 items-center px-5 py-3 border-[1px] font-semi text-md  border-zinc-400 rounded-full">
            Start the project
            <div className="w-10 h-10 border-[2px] border-zinc-400 rounded-full flex items-center justify-center ">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
