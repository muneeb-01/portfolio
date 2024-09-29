import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full  bg-[#174943] relative py-[2.8vh] md:py-[4vh] xl:py-[9vh] rounded-tl-3xl rounded-tr-3xl max-md:rounded-tl-lg max-md:rounded-tr-lg ">
      <div className=" overflow-hidden text-8xl sm:text-[8.3rem] md:text-[12rem] lg:text-[16rem]  pb-2  xl:leading-[0.81em] xl:pb-6 flex items-center border-y-[0.1vw]  border-gray-50">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          
          transition={{ repeat: Infinity, ease: "linear", duration: "12" }}
          className=" uppercase text-nowrap pl-5 md:pl-10 font-FOUNDERSGROTESK tracking-[-0.025em]"
        >
          Lets WORK TOGETHER
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: "12" }}
          className=" uppercase text-nowrap pl-5 md:pl-10 font-FOUNDERSGROTESK tracking-[-0.025em] "
        >
          Lets WORK TOGETHER
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
