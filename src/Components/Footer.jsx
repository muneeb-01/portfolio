import React from "react";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed={window.innerWidth >= 1024 ? "-0.099" : "0"}
      className="w-full h-screen max-lg:h-[50vh] bg-[#18181B] flex pt-[4vw] pb-2vw px-[3.2vw]"
    >
      <div
        id="contact"
        className="w-1/2 h-full flex flex-col justify-between items-start "
      >
        <div>
          {["EYE", "OPENING", "PORTFOLIO"].map((item, idx) => {
            return (
              <div key={idx} className="masker flex items-center">
                <h1 className="uppercase font-FOUNDERSGROTESK  tracking-tight leading-[6.6vw] text-[9vw]">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>
        <h3 className="uppercase font-FOUNDERSGROTESK  tracking-tight leading-[6.6vw] text-[2.5vw] max-lg:text-[5vw] max-lg:pb-[4vw]">
          MUNEEB MUGHAL
        </h3>
      </div>
      <div className="w-1/2 h-full flex flex-col border-l-[1px] border-zinc-50 pl-[3.2vw]">
        <h1 className="uppercase font-FOUNDERSGROTESK  tracking-tight leading-[6.6vw] text-[9vw]">
          CONTACT
        </h1>
        <div className="mt-[2.8vw] ">
          <p className="text-[1.1vw] max-lg:text-[2.6vw]">S:</p>
          <div className="mt-[1.5vw] flex flex-col">
            <a href="" className="text-[1.1vw] max-lg:text-[1.9vw]">
              Facebook
            </a>
            <a href="" className="text-[1.1vw] max-lg:text-[1.9vw]">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-[2.8vw] ">
          <p className="text-[1.1vw] max-lg:text-[2.6vw]">L:</p>
          <div className="mt-[1.5vw] flex flex-col">
            <a className="text-[1.1vw] max-lg:text-[1.9vw]">B-412 Azizabad,</a>
            <a className="text-[1.1vw] max-lg:text-[1.9vw]">Bhangoria Town,</a>
            <a className="text-[1.1vw] max-lg:text-[1.9vw]">Karachi,</a>
          </div>
        </div>
        <div className="mt-[2.8vw] ">
          <p className="text-[1.1vw] max-lg:text-[2.6vw]">E:</p>
          <div className="mt-[1.5vw] flex flex-col">
            <a className="text-[1.1vw] max-lg:text-[1.9vw]">
              muneerahmed8556@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
