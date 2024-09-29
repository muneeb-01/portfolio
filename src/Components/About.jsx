import React from "react";

function About() {
  const windowsWidth = window.innerWidth;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed={window.innerWidth > 1284 ? "-0.089" : "0"}
      className="w-full py-[2.6vw] max-md:pt-[10vw] h-max bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl max-md:rounded-tl-lg max-md:rounded-tr-lg text-black"
    >
      <h1 className="font-NEUE-MONTREAL text-[3.3vw] leading-[3.5vw] tracking-tighter w-[80%] ml-[2vw] max-xl:text-[5vw] max-xl:leading-[4vw] max-xl:w-[90%] max-xl:mt-[3.5vw] max-xl:tracking-normal max-md:text-[7.8vw] max-md:leading-[7.3vw] max-md:tracking-normal max-md:px-[3.6vw] max-md:mb-[9vw]">
        Building a video conferencing app with Next.js for frontend, Clerk for
        authentication, and Stream for real-time video functionalities and Many
        more.
      </h1>
      <div className="w-full flex max-md:flex-col border-t-[0.1vw] border-black mt-[2.6vw]">
        <div className="w-1/2 py-[2vw] px-[3vw] max-md:w-full max-md:px-[5vw]">
          <h1 className="text-[3vw] max-xl:text-[3.6vw] max-lg:text-[4.6vw] max-md:text-[8.5vw]">
            Latest Project:
          </h1>
          <button className="flex items-center text-center gap-[1.5vw] text-[1.1vw] max-lg:text-[1.6vw] max-lg:py-[1.5vw] max-lg:px-[3vw] rounded-full py-[1vw] px-[2vw] font-medium bg-black text-gray-50 max-xl:text-[1.4vw] max-md:text-[3.3vw] max-md:px-[4vw]">
            Have a Look
            <div className="w-3 h-3 rounded-full bg-zinc-50 max-md:size-2"></div>
          </button>
        </div>
        <div className="w-1/2 pr-[3.5vw] py-[2vw] max-md:w-full max-md:px-[5vw]">
          <div className="w-full flex justify-center items-center rounded-3xl h-[60vh] bg-[#707e42] max-xl:h-[53vh] max-lg:h-[30vh] max-md:h-[40vh] max-md:rounded-xl">
            <h1 className="text-[3vw] text-white opacity-20  max-xl:text-[3.6vw] max-lg:text-[4.6vw] max-md:text-[8.5vw]">
              Coming Soon
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
