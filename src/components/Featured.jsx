import { delay, motion, useAnimation } from "framer-motion";

import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = () => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = () => {
    cards[index].start({ y: "100%" });
  };
  const index = 0;

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-NeueMontreal tracking-tight">
          Featured Prjects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards gap-10 mt-20 w-full flex items-center justify-between">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <h1 className="absolute flex right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none z-[9] text-8xl font-['Bebas Neue'] overflow-hidden ">
              {"FYDE".split("").map((item, index) => (
                <>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index}
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
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] "
          >
            <div className="card w-full h-full rounded-xl relative ">
              <h1 className="absolute flex left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold overflow-hidden  leading-none z-[9] text-8xl font-['Bebas Neue'] ">
                {"VISE".split("").map((item, index) => (
                  <>
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                      key={index}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
