import React from "react";

function Cards() {
  return (
    <div className="w-full flex justify-center items-center max-lg:flex-col gap-[1vw] border-t-[1px] border-zinc-600 bg-[#F6F6F6] px-[3vw] py-[7vw]">
      <a
        href="/image/RESUME.pdf"
        className="w-1/2 h-[56vh] bg-[#014D43] rounded-3xl flex justify-center items-center max-xl:w-[33.3%] max-lg:w-full max-lg:h-[35vh] "
      >
        <h1 className="text-[4.3vw] max-xl:text-[5.4vw] max-lg:text-[9vw] font-semibold text-[#CDEA68]">
          Resume
        </h1>
      </a>
      <div className="w-1/2 h-[56vh] flex justify-center items-center gap-[1vw] max-xl:w-[66.6%] max-lg:w-full max-lg:h-[35vh]">
        <a
          href="/image/JavaScript.png"
          className="w-1/2 h-full bg-[#212121] rounded-3xl flex justify-center items-center"
        >
          <h1 className="text-[3vw] max-xl:text-[5vw] max-lg:text-[7vw] font-semibold text-[#f6f6f6]">
            J
            <span className="text-[2.6vw] max-xl:text-[4.6vw] max-lg:text-[6.6vw]">
              ava
            </span>
            S
            <span className="text-[2.6vw] max-xl:text-[4.6vw] max-lg:text-[6.6vw]">
              cript
            </span>
          </h1>
        </a>
        <a
          href="/image/React.png"
          className="w-1/2 h-full bg-[#212121] rounded-3xl flex justify-center items-center"
        >
          <h1 className="text-[3vw] max-xl:text-[5vw] max-lg:text-[7vw] font-semibold text-[#f6f6f6]">
            R
            <span className="text-[2.6vw] max-xl:text-[4.6vw] max-lg:text-[6.6vw]">
              eact
            </span>
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Cards;
