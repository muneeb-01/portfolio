import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function FeaturedProjects() {
  const cardAnimation = [useAnimation(), useAnimation()];

  const handleMouseEnter = (index) => {
    cardAnimation[index].start({ y: "0" });
  };
  const handleMouseOut = (index) => {
    cardAnimation[index].start({ y: "100%" });
  };

  useGSAP(() => {
    const page4Right = document.querySelectorAll(".sec-right");

    if (window.innerWidth <= 820) return;

    page4Right.forEach((e) => {
      const crsr = e.childNodes[2];
      e.addEventListener("mouseenter", () => {
        e.childNodes[1].style.opacity = 1;
        e.childNodes[1].play();
      });
      e.addEventListener("mouseleave", () => {
        e.childNodes[1].style.opacity = 0;
        e.childNodes[1].load();
        gsap.to(crsr, {
          scale: 0,
          opacity: 0.75,
        });
      });

      e.addEventListener("mousemove", (dets) => {
        const crsrX = dets.x - e.getBoundingClientRect().x - 100;
        const crsrY = dets.y - e.getBoundingClientRect().y - 100;
        gsap.to(crsr, {
          x: crsrX,
          y: crsrY,
          scale: 1,
          opacity: 1,
        });
      });
    });
  }, []);

  return (
    <div id="featured-project" className=" w-full bg-zinc-900 py-[2.2vw]">
      <div className="w-full pb-[2.2vw] border-b-[1px] border-zinc-800 max-md:px-[3.8vw] max-md:py-[4.4vw]">
        <h1 className="text-[4.5vw] px-[3vw] font-NEUEMONTREAL tracking-tight max-lg:text-[6vw] max-md:text-[6.9vw]">
          Featured Projects
        </h1>
      </div>

      <div
        id="page4"
        className=" w-full  relative pb-[4vh] max-[1025px]:pb-[0vh]"
      >
        <div className="section w-full flex justify-between  border-zinc-800 pb-[4vh] border-b-[1px] pt-[13vh] px-[10vw] items-center max-[1025px]:flex-col max-[1025px]:py-[3vh]">
          <div className="sec-left w-[25%] h-full pt-[3vh] border-t-2 border-[#fff] max-[1025px]:w-[100%] max-[1025px]:py-[3vh]">
            <h2 className="text-[2.1vw] font-bold text-white max-[1025px]:text-[2.1vh]">
              Accern. Rhea
            </h2>
            <p className="text-[1.2vw] text-white mt-[10vh] max-[1025px]:my-[1vh] max-[1025px]:text-[1.4vh] max-[1025px]:tracking-wide opacity-85">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              inventore enim, quos, qui est id, architecto libero in esse vel
              officiis repellat alias maxime minima.
            </p>
          </div>
          <div className="sec-right overflow-hidden rounded-md shadow-lg w-[70%] h-full bg-[blanchedalmond] relative max-[1025px]:w-[100%]">
            <img
              className="h-full w-full object-cover"
              src="./content/images/fc0b129f-34ec-4458-ac87-44117fbb83cd.webp"
              alt=""
            />
            <video
              className="h-full transition-opacity w-full absolute opacity-0 top-0 left-0 object-cover"
              muted
              src="./content/videos/nodo-cover-big.mp4"
            ></video>
            <div className="page3-crsr size-[9vw] scale-[0] opacity-[.75] rounded-full bg-[#4F5BFF] absolute top-0 left-0"></div>
          </div>
        </div>
        <div className="section w-full  flex justify-between  pt-[13vh] px-[10vw] items-center max-[1025px]:flex-col max-[1025px]:py-[3vh]">
          <div className="sec-left w-[25%] h-full pt-[3vh] border-t-2 border-[#fff] max-[1025px]:w-[100%] max-[1025px]:py-[3vh]">
            <h2 className="text-[2.1vw] font-bold text-white  max-[1025px]:text-[2.1vh]">
              Accern. Rhea
            </h2>
            <p className="text-[1.2vw] text-white mt-[10vh] max-[1025px]:my-[1vh] max-[1025px]:text-[1.4vh] max-[1025px]:tracking-wide opacity-85">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              inventore enim, quos, qui est id, architecto libero in esse vel
              officiis repellat alias maxime minima.
            </p>
          </div>
          <div className="sec-right overflow-hidden rounded-md shadow-lg w-[70%] h-full bg-[blanchedalmond] relative max-[1025px]:w-[100%]">
            <img
              className="h-full w-full object-cover"
              src="./content/images/65cb66041ce86ac3784aaba1_Afrotech - cover_horizontal.webp"
              alt=""
            />
            <video
              className="h-full transition-opacity w-full absolute top-0 left-0 object-cover"
              muted
              src="./content/videos/afrotech-cover-big.mp4"
            ></video>
            <div className="page3-crsr size-[9vw] scale-[0] opacity-[.75] rounded-full bg-[#4F5BFF] absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
