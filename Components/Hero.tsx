import Particles from "@tsparticles/react";
import React from "react";
import { Particle } from "tsparticles-engine";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particles />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi I'm<span className="text-yellow-300">Dae Hee</span>
          </h1>
          <TextEffect />
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
