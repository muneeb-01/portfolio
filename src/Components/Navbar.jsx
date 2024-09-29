import React, { useEffect, useRef, useState } from "react";
import { IoReorderTwoOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  //for mobile navigation
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const navbarRef = useRef(null);

  const [resNav, setResNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos > currentScrollPos;
      const navbarHeight = navbarRef.current.clientHeight;

      if (currentScrollPos > navbarHeight) {
        setIsNavVisible(isScrolledDown);
      } else {
        setIsNavVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navOptions = [
    { name: "Play", route: "play" },
    { name: "Projects", route: "featured-project" },
    { name: "About Me", route: "about-me" },
    { name: "Contact", route: "/Contact" },
    { name: "Hire me", route: "/Contact" },
  ];

  return (
    <div className="relative">
      <div
        ref={navbarRef}
        style={{
          position: "fixed",
          top: isNavVisible ? "0" : "-100px",
          width: "100%",
          transition: "top 0.3s",
        }}
        className="fixed bg-zinc-900 opacity-95 z-[999] w-full px-[4vw] py-8 font-NEUEMONTREAL max-md:pt-6 max-md:pb-4 max-md:px-8"
      >
        <div className="w-full flex justify-between items-center">
          <div className="logo opacity-100 ">
            <motion.img
              initial={{ opacity: 0, y: "-100%", scale: 0.9 }}
              animate={{ opacity: 1, y: "0%", scale: 1 }}
              transition={{
                ease: easeInOut,
                delay: "0.1",
                duration: 1,
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white size-10 max-sm:size-6 cursor-pointer"
              src="/image/MuneebLogo.png"
              alt=""
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-100%", scale: 0.9 }}
            animate={{ opacity: 1, y: "0%", scale: 1 }}
            transition={{
              ease: easeInOut,
              delay: "0.1",
              duration: 1,
            }}
            className="link flex items-center gap-10 opacity-100"
          >
            {navOptions.map((item, idx) => {
              return (
                <div>
                  {idx < 3 ? (
                    <a
                      onClick={() => scrollToComponent(item.route)}
                      initial={{ opacity: 0, y: "-100%", scale: 0.9 }}
                      animate={{ opacity: 1, y: "0%", scale: 1 }}
                      transition={{
                        ease: easeInOut,
                        delay: "0.1",
                        duration: 1,
                      }}
                      key={idx}
                      className={`text-[1vw] cursor-pointer font-thin capitalize max-xl:text-[1.15vw] max-lg:hidden ${
                        idx === 4 && "ml-[20vw] max-xl:ml-[10vw]"
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.route}
                      initial={{ opacity: 0, y: "-100%", scale: 0.9 }}
                      animate={{ opacity: 1, y: "0%", scale: 1 }}
                      transition={{
                        ease: easeInOut,
                        delay: "0.1",
                        duration: 1,
                      }}
                      key={idx}
                      className={`text-[1vw] cursor-pointer font-thin capitalize max-xl:text-[1.15vw] max-lg:hidden ${
                        idx === 4 && "ml-[20vw] max-xl:ml-[10vw]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <IoReorderTwoOutline
              onClick={() => {
                setResNav(true);
                document.body.style.overflow = "hidden";
              }}
              className="hidden max-lg:block text-[5vw] max-md:text-[10vw]"
            />
          </motion.div>
        </div>
      </div>
      <div
        className={`fixed ${
          resNav ? "fixed" : "opacity-0"
        } w-[100vw] h-screen bg-zinc-900 transition ease-in-out duration-500 ${
          resNav ? "-translate-y-0" : "-translate-y-full"
        }   z-[999] `}
      >
        <div className="Mobile-Nav fixed bg-zinc-900 opacity-80 z-[999] w-full px-[4vw] py-8 font-NEUEMONTREAL max-md:pt-6 max-md:pb-4 max-md:px-8">
          <div className="w-full flex justify-between items-center">
            <div className="logo opacity-100 ">
              <img
                className="text-white size-10 max-sm:size-6"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setResNav(false);
                  document.body.style.overflowY = "scroll";
                }}
                src="/image/MuneebLogo.png"
                alt=""
              />
            </div>
            <div className="link flex items-center gap-10 opacity-100">
              <FiPlus
                onClick={() => {
                  setResNav(false);
                  document.body.style.overflowY = "scroll";
                }}
                className="hidden max-lg:block text-[5vw] rotate-45 max-md:text-[10vw] "
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-48 px-20  flex flex-col items-center">
          {navOptions.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  scrollToComponent(item.route);
                  setResNav(false);
                  document.body.style.overflowY = "scroll";
                }}
                className="masker flex items-center"
              >
                <a className="uppercase font-FOUNDERSGROTESK  text-nowrap tracking-tight leading-[6.6vw] text-[9vw] max-md:text-[20vw] max-md:leading-[13.5vw]">
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
