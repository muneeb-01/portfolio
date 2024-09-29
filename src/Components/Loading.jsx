import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
    <div className="w-full h-screen flex justify-center items-center bg-slate-50">
      <motion.div
        initial={{ width: "90vw", height: "90vh" }}
        animate={{ width: "100vw", height: "100vh", borderRadius: "0" }}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          delay: "1",
          duration: 1,
        }}
        data-scroll
        data-scroll-section
        data-scroll-speed={width > 1024 ? "-.6" : "0"}
        className=" bg-zinc-900 p-1 max-lg:h-[85vh] max-md:h-[105vh] rounded-3xl"
      >
        <div className="textstructure mt-48 px-20 max-xl:min-h-[33vh] max-lg:min-h-[36vh] max-md:min-h-[50vh]  max-xl:mt-[13vw] max-lg:mt-[20vw] max-md:mt-[30vw] max-lg:px-[5vw]">
          {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, idx) => {
            return (
              <div key={idx} className="masker flex items-center">
                {idx === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: calculateWidth() }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      delay: "0.2",
                      duration: 1,
                    }}
                  >
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
      </motion.div>
    </div>
  );
}

export default LandingPage;
