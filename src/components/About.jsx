import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Tech from "./Tech";
import AnimatedTitle from "./AnimatedTitle";

import CubeAnimation from "./CubeAnimation";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });






  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        

        <AnimatedTitle
          title="Construyo experiencias digitales <br /> con código limpio y soluciones innovadoras "
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
       


        <div className="mask-clip-path about-image bg-black  flex flex-col">
        <CubeAnimation />
        <h1 className='text-white text-center text-5xl'>Tecnologías</h1>

          <Tech className ='mt-5 mb-5' />
        </div>
      </div>
    </div>
  );
};

export default About;