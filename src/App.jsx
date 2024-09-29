import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import FeaturedProjects from "./Components/FeaturedProjects";
import AboutMe from "./Components/AboutMe";
import Cards from "./Components/Cards";
import HireMe from "./Components/HireMe";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Loading from "./Components/Loading";
import Contact from "./Components/Contact";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className={`w-full min-h-screen text-gray-50 bg-zinc-900  ${
        isLoading && "bg-slate-50"
      }`}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <LandingPage />
          <Marquee />
          <About />
          <Eyes />
          <FeaturedProjects />
          <AboutMe />
          <Cards />
          <HireMe />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
