import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const MobileNav = () => {
  return (
    //모바일Nav  flex 컨테이너 위치&배경색지정 //css == global.css // homepage index.tsx
    // 잘모르겠는 부분? transform transition-all
    <div
      className={`fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">SERVICE</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">BLOG</div>
        <div className="nav-link-mobile">CONTACT</div>
      </div>
      {/* XMarkIcon 아이콘 설정 */}
      <div className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
