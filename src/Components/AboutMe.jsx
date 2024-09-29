import React from "react";

function AboutMe() {
  return (
    <div
      id="about-me"
      className="w-full bg-[#F6F6F6] py-[2.2vw] text-zinc-900 rounded-tl-3xl rounded-tr-3xl max-lg:py-[6vw] max-lg:px-[2vw]"
    >
      <div className="w-full pb-[2.2vw] border-b-[1px] border-zinc-800">
        <h1 className="text-[4.5vw] px-[3vw] font-NEUEMONTREAL tracking-tight max-md:text-[7vw]">
          About me
        </h1>
      </div>
      <div className="w-full  flex items-start max-lg:flex-col p-[2vw] gap-[2vw] max-lg:px-[4vw]">
        <div className="w-1/2 h-full flex items-start max-lg:flex-col max-lg:w-full">
          <div className="w-1/2 h-full max-lg:w-full max-lg:mb-[4vw]">
            <p className="text-[1vw] font-medium border-b-[1px] border-zinc-900 inline-block pr-2 max-xl:text-[2vw] max-lg:flex-col max-lg:text-[2.3vw] max-md:text-[4vw]">
              Services:
            </p>
            <div className="mt-[4vw] max-lg:mt-[2vw] flex flex-wrap gap-2">
              {["FULL STACK DEVELOPER", "MERN STACK DEVELOPER"].map(
                (item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="border-[1px] border-zinc-900 inline-block px-[1.1vw] py-[0.3vw] rounded-full text-[0.9vw] max-xl:text-[1.2vw] max-lg:text-[2vw] max-lg:px-[3vw] max-lg:py-[1vw] font-medium max-lg:shadow-md max-md:text-[2.8vw]"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="w-1/2 h-full max-lg:w-full max-lg:mb-[4vw]">
            <p className="text-[1vw] font-medium border-b-[1px] border-zinc-900 inline-block pr-2 max-xl:text-[2vw] max-lg:text-[2.3vw] max-md:text-[4vw]">
              Skills:
            </p>
            <div className="mt-[4vw] max-lg:flex max-lg:gap-[1vw] flex flex-wrap gap-2 flex-1">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "React.js",
                "React Redux",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git",
                "TypeScript",
                "THREE.JS",
                "REACT THREE FIBER",
                "BLENDER",
                "WEB GLSL",
              ].map((item, idx) => {
                return (
                  <button
                    key={idx}
                    className="border-[1px] hover:scale-[1.03] block mt-[0.5vw] border-zinc-900 px-[1.1vw] py-[0.3vw] rounded-full text-[0.9vw] max-xl:text-[1.2vw] font-medium max-lg:text-[2vw] max-lg:px-[3vw] max-lg:py-[1vw]   max-lg:shadow-md max-md:text-[2.8vw]"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full max-lg:w-full">
          <p className="text-[1vw] font-medium border-b-[1px] border-zinc-900 inline-block pr-2 max-xl:text-[2vw] max-lg:text-[2.3vw] max-md:text-[4vw]">
            About me:
          </p>
          <div className="mt-[4vw]">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#CDEA68] via-[#88c96e] to-[#014D43] max-xl:size-[9.5vw] max-lg:size-[16vw] max-md:size-[20vw] max-md:rounded-xl overflow-hidden">
              <img
                src="/image/Profile.png"
                className="w-full bg-center drop-shadow-2xl"
                alt=""
              />
            </div>
            <div className="w-[85%] max-xl:w-[95%]  mt-[1.2vw] max-lg:mt-[3.5vw]">
              <p className="text-[1.1vw] max-xl:text-[1.6vw] font-medium max-lg:text-[2.5vw] max-md:text-[3.6vw]">
                I'm a Full-Stack/MERN Developer proficient in essential web
                technologies. With expertise in HTML, CSS, JavaScript, React.js,
                and Tailwind CSS for frontend development, I create compelling
                user interfaces. On the backend, I leverage Node.js, Express.js,
                and MongoDB for efficient server-side programming and database
                management. Pursuing a BSc in Computer Science at IQRA
                University, I'm passionate about expanding my skills in both
                frontend and backend development. Beyond coding, I enjoy
                maintaining an active lifestyle and prioritizing personal
                wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
