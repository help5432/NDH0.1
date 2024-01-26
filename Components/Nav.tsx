import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/16/solid";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

//3.Nav 컴포넌트에서 openNav Ture함수 호출 , onclick 이벤트 발생시 openNav true 호출 -> nav상태 true로 변경
const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[12vh]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB<span className="text-yellow-300">DEV</span>
        </h1>
        {/* nav-link 노란색 막대설정*/}
        <div className="nav-link">Home</div>
        <div className="nav-link">SERVICES</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PROJECT</div>
        <div className="nav-link">BLOG</div>
        <div className="nav-link">CONTACT</div>
        {/* Nav Bars3 아이콘생성  , heroicon(react이용)*/}
        <div onClick={openNav}>
          {/* Hamberger Menu UI or Doner Menu  */}
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
