import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  nav: boolean;
  //는 TypeScript에서 함수 또는 표현식이 아무 값도 반환하지 않음을 나타내는 타입입니다. 즉, 해당 함수나 표현식은 반환 값이 없다는 것을 의미합니다.
  closeNav: () => void;
}

//MobileNav 컴포넌트 내부에서는 nav 상태와 closeNav 함수를 Props 인터페이스에 정의된대로 받아와 사용합니다.
const MobileNav = ({ nav, closeNav }: Props) => {
  // nav가 true 일경우 translate-x-0 , false일경우 translate-x-[-100%] 할당
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    //모바일Nav  flex 컨테이너 위치&배경색지정 //css == global.css // homepage index.tsx
    // 잘모르겠는 부분? transform transition-all
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">SERVICE</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">BLOG</div>
        <div className="nav-link-mobile">CONTACT</div>
      </div>
      {/* XMarkIcon 아이콘 설정 X아이콘*/}
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
