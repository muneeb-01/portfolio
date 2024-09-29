import { easeInOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiArrowSmallDown } from "react-icons/hi2";

function LandingPage() {
  const width = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateWidth = () => {
    // Adjust breakpoints and scaling as needed
    if (windowWidth <= 375) {
      return "15vw"; // Adjust for smaller screens
    } else if (windowWidth < 768) {
      return "15vw";
    } else if (windowWidth < 1200) {
      return "16vw";
    } else {
      return "9vw";
    }
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed={width > 1024 ? "-.6" : "0"}
      className="w-full min-h-screen bg-zinc-900 p-1 max-lg:h-[85vh] max-md:h-[105vh]"
    >
      <div className="textstructure mt-48 px-20 max-xl:min-h-[33vh] max-lg:min-h-[36vh] max-md:min-h-[50vh]  max-xl:mt-[13vw] max-lg:mt-[20vw] max-md:mt-[30vw] max-lg:px-[5vw]">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, idx) => {
          return (
            <div key={idx} className="masker flex items-center">
              {idx === 1 && (
                <motion.div initial={{ width: calculateWidth() }}>
                  <div
                    className={`bg-white w-[full] rounded-[10px] max-lg:rounded-[6px] h-[5.6vw] relative top-[0.5vw] mr-[1vw] max-xl:h-[6.9vw] max-lg:h-[11.2vw]`}
                  ></div>
                </motion.div>
              )}
              <h1 className="uppercase font-FOUNDERSGROTESK text-nowrap tracking-tight leading-[6.6vw] text-[9vw] max-xl:text-[10vw] max-xl:leading-[7vw] max-lg:text-[18vw] max-lg:leading-[12.6vw]">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: easeInOut,
          delay: "0.1",
          duration: 1,
        }}
        className="border-t-2 border-zinc-600 mt-24 flex justify-between items-center py-10 max-md:flex-col max-md:gap-4 max-md:items-start max-md:py-6 max-md:px-[6vw]"
      >
        {["Crafting digital solutions"].map((item, idx) => {
          return (
            <motion.p
              initial={{ opacity: 0, y: "100%", scale: 0.9 }}
              animate={{ opacity: 1, y: "0%", scale: 1 }}
              transition={{
                ease: easeInOut,
                delay: "0.1",
                duration: 1,
              }}
              key={idx}
              className={`text-[1.2vw] tracking-tight font-thin font-sans px-14  leading-none max-lg:text-[2vw] max-md:px-[0vw] max-md:text-[3.8vw]  text-nowrap 
              }`}
            >
              {item}
            </motion.p>
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: "100%", scale: 0.9 }}
          animate={{ opacity: 1, y: "0%", scale: 1 }}
          transition={{
            ease: easeInOut,
            delay: "0.1",
            duration: 1,
          }}
          className="start cursor-pointer mr-14 flex gap-2 items-center"
        >
          <div className="border  border-zinc-400 px-4 py-2 rounded-[50px] font-light uppercase text-[1.2vw] max-lg:text-[1.5vw] max-md:text-[3vw]">
            start the project
          </div>
          <div className="border border-zinc-400 rotate-[225deg] px-2 py-2 rounded-[50px] text-[1.6vw] max-lg:text-[2vw] max-md:hidden">
            <span>
              <HiArrowSmallDown />
            </span>
          </div>
        </motion.div>
      </motion.div>
      <div className="relative group mt-11 max-md:hidden">
        <p className="text-xl text-zinc-700 font-semibold text-center hover:translate-y-10 hover:opacity-0 transition duration-300 ease-in-out">
          scroll down
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
