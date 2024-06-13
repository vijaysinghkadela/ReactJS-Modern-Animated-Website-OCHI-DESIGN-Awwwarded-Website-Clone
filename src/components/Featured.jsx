import { motion } from "framer-motion";

import { Power4 } from "gsap";
import { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(0);
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-NeueMontreal tracking-tight">
          Featured Prjects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards gap-10 mt-20 w-full flex items-center justify-between">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none z-[9] text-8xl font-['Bebas Neue'] overflow-hidden ">
              {"FYDE".split("").map((item, index) => (
                <>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
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
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardContainer relative w-1/2 h-[75vh] "
          >
            <div className="card w-full h-full rounded-xl relative ">
              <h1 className="absolute flex right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold overflow-hidden  leading-none z-[9] text-8xl font-['Bebas Neue'] ">
                {"VISE".split("").map((item, index) => (
                  <>
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={isHovering ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: Power4.easeInOut,
                        delay: index * 0.1,
                      }}
                      key={index}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
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
