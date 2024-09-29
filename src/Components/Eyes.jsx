import { transform } from "framer-motion";
import React, { useEffect } from "react";

function Eyes() {
  useEffect(() => {
    function eyesRotation() {
      window.addEventListener("mousemove", (e) => {
        const pupils = document.querySelectorAll(".pupil");

        pupils.forEach((pupil) => {
          let blackEyeWidth;
          const blackEyes = document.querySelectorAll(".black-eye");
          blackEyes.forEach((blackEye) => {
            blackEyeWidth = blackEye.clientWidth;
          });

          let pupilwidth = pupil.clientHeight;

          let pupilRange = blackEyeWidth - pupilwidth;

          //between 0-1
          let rangeX = e.clientX / window.innerWidth;
          let rangeY = e.clientY / window.innerHeight;

          let pupilCurrentPositionX =
            (rangeX * pupilRange - pupilRange / 2) * 0.8;
          let pupilCurrentPositionY =
            (rangeY * pupilRange - pupilRange / 2) * 0.8;

          blackEyes.forEach((blackEye) => {
            blackEye.style.transform = `translate(${
              pupilCurrentPositionX * 0.45
            }px,${pupilCurrentPositionY * 0.45}px)`;
          });

          pupil.style.transform = `translate(${pupilCurrentPositionX}px,${pupilCurrentPositionY}px)`;
        });
      });
    }
    eyesRotation();
    return () => {};
  }, []);

  return (
    <div
      id="play"
      className="eyes w-full h-screen relative overflow-hidden max-lg:h-[50vh] max-md:h-[40vh]"
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed={window.innerWidth > 1024 ? "-0.45" : "0"}
        className="w-full h-full bg-center bg-cover bg-[url('/image/eyes.jpg')] relative"
      >
        <div className="absolute top-1/2 left-1/2  -translate-x-[50%] flex items-center justify-evenly -translate-y-[50%] gap-10 max-md:gap-[7vw]">
          <div className="flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100 max-xl:size-[19vw] max-md:size-[21vw] ">
            <div className="black-eye w-[9vw] relative flex items-center justify-center h-[9vw] rounded-full bg-black max-xl:size-[11vw] max-md:size-[13vw]">
              <div className="pupil absolute w-[1.8vw] h-[1.8vw] max-md:size-[4vw]  rounded-full shadow-inner bg-zinc-100"></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100 max-xl:size-[19vw] max-md:size-[21vw] ">
            <div className="black-eye w-[9vw] relative flex items-center justify-center h-[9vw] rounded-full bg-black max-xl:size-[11vw] max-md:size-[13vw]">
              <div className="pupil w-[1.8vw] h-[1.8vw] max-md:size-[4vw]  rounded-full bg-zinc-100 shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
