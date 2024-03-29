import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Service from "@/Components/Service";
import Skills from "@/Components/Skills";
import SkillsItem from "@/Components/SkillsItem";
import SkillsLanguage from "@/Components/SkillsLanguage";
import React, { useState } from "react";

//1. Homepage 컴포넌트 초기 렌더링
const HomePage = () => {
  //1.usestate사용 초기 nav 상태 false로 설정
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true); //setNav True!
  const closeNav = () => setNav(false); //setNav False!

  return (
    // 수평스크롤 삭제
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar section */}
        {/*2.Homepage 컴포넌트  내부의 MobileNav , Nav 컴포넌트 호출 ,mobile 컴포넌트에 현재 nav상태와 closeNav함수를 porps로 전달
           2.Nav컴포넌트에는 openNav함수전달 props로 */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30] ">
          {/* About  */}
          <About />
          {/* Service */}
          <Service />
          {/* Skills */}
          <Skills />
          {/* SkillsItem */}

          {/* SkillsLanguage */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
