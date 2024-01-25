import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

//interface 이므로  따라서 MobileNav 컴포넌트가 사용되는 곳에서는 반드시 nav와 closeNav 속성을 제공해주어야 합니다
interface Props {
  nav: boolean;
  //() => void 형태로 아무런 값도 반환하지 않는 함수.
  closeNav: () => void;
}

//3.MobileNav에
const MobileNav = ({ nav, closeNav }: Props) => {
  // nav가 true 일경우 translate-x-0,false일경우 translate-x-[-100%] ( 클래스를 적용하면 해당 요소가 수평으로 왼쪽으로 100% 만큼 이동=숨김) 할당
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
      {/* 모바일 XmarkIcon 아이콘 설정 X아이콘 누를시 close되게*/}
      <div
        onClick={closeNav}
        // z-100000 맨앞 = z  가장 상위로 먼저 보이게 설정
        className="absolute z-[1000000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
