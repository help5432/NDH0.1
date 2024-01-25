import Particles from "@tsparticles/react";
import React from "react";
import { Particle } from "tsparticles-engine";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particles />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi I'm<span className="text-yellow-300">Dae Hee</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            placeat, explicabo praesentium ipsa quo, ea dignissimos eveniet
            doloribus enim temporibus quisquam. Officia architecto optio amet
            sapiente. Est reiciendis ea consequatur?
          </p>
          <div className="mt-[2rem] space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            {/* 버튼 , 아이콘 ArrowDownTrayIcon*/}
            <button className="px-[2rem] hover:bg-yellow-400 transistion-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            {/* 버튼2 , 아이콘 PlayCircleIcon */}
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white ">
                Watch The viedeo
              </p>
            </button>
          </div>
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
