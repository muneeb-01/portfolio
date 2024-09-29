import React, { useEffect, useState } from "react";

function HireMe() {
  return (
    <div className="w-full min-h-[100vh] z-20 max-lg:min-h-[60vh] bg-[#CDEA68] flex justify-center items-center flex-col relative">
     
      <div className="textcontainer flex justify-center items-center flex-col">
        {["ALWAYS", "READY", "TO START", "THE PROJECT"].map((item, idx) => {
          return (
            <div key={idx} className="masker flex items-center">
              <h1
                className={`uppercase font-FOUNDERSGROTESK tracking-tight leading-[10.5vw] ${
                  idx === 0
                    ? "text-[2vw] leading-[1vw] max-lg:leading-[2vw] max-lg:text-[4vw]"
                    : "text-[16vw] max-lg:text-[20vw] max-lg:leading-[13vw]"
                }  text-[#212121]`}
              >
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="absolute xl:mix-blend-lighten xl:opacity-30 z-10 max-xl:top-[3%] max-lg:top-[-3%] top-[45%] left-1/2  -translate-x-[50%] flex items-center justify-evenly -translate-y-[50%] gap-10">
        <div className="flex  justify-center items-center w-[12.5vw] h-[12.5vw]  max-xl:size-[14vw] max-lg:size-[20vw] rounded-full bg-zinc-100 ">
          <div className=" black-eye size-[9vw] relative flex items-center justify-center max-xl:size-[8.5vw] rounded-full bg-black">
            <div className="pupil size-[1.8vw]  rounded-full bg-zinc-100"></div>
          </div>
        </div>
        <div className="flex  justify-center items-center w-[12.5vw] h-[12.5vw]  max-xl:size-[14vw] max-lg:size-[20vw] rounded-full bg-zinc-100 ">
          <div className="black-eye size-[9vw] relative flex items-center justify-center max-xl:size-[8.5vw] rounded-full bg-black">
            <div className="pupil size-[1.8vw]  rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;

{
  /* <div className=""></div>
<div className=""></div>
<div className=""></div> */
}
