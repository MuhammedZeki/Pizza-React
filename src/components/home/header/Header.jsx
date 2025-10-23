import React from "react";

const Header = () => {
  return (
    <header className="h-screen bg-[url(/iteration-1/home-banner.png)] bg-center bg-no-repeat bg-cover">
      <div className="px-auto flex flex-col gap-8 items-center justify-center">
        <div className="w-[350px] text-white tek">
          <img src="/iteration-1/logo.svg" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-satisfy text-[#FDC913]  text-[2rem]  ">
            fırsatı kaçırma
          </span>
          <p className="text-white  border-none cursor-pointer rounded-[48px] font-roboto-condensed font-light text-[5.3rem]">
            KOD ACIKTIRIR
          </p>
          <p className="text-white text-center font-roboto-condensed font-light text-[5.3rem]">
            PIZZA, DOYURUR
          </p>
          <button className="text-[#292929] bg-[#FDC913] ac border-none cursor-pointer rounded-[48px] font-barlow font-semibold text-[1.1rem]">
            ACIKTIM
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
