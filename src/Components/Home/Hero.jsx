import React, { Fragment } from "react";

import Illust from "../../Assets/Illustration.png";

function Hero() {
  return (
    <Fragment>
      <div className="bg-[#F5F7FA] w-full h-screen lg:h-screen flex justify-center items-center overflow-hidden">
        <div className="w-full lg:w-[80%] h-full lg:h-[70%] grid place-items-center place-content-start lg:flex items-center justify-between px-4 lg:px-20 pt-20 lg:pt-16">
          <div className="lg:w-[500px] h-full lg:h-[192.9px] gap-0 lg:gap-7 lg:grid place-content-center lg:place-content-baseline">
            <p className="font-inter font-semibold text-2xl lg:text-5xl text-[#4D4D4D]">
              Lessons and insights{" "}
              <span className="text-[#4CAF4F]">from 8 years</span>
            </p>
            <p className="font-inter text-xs py-3">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="rounded-sm bg-[#4CAF4F] text-white flex justify-center items-center lg:w-[89.55px] h-[36.49px]">
              <p className="font-inter font-medium text-xs w-24 lg:w-max h-auto">
                Register
              </p>
            </button>
          </div>
          <div className="w-[272.16px] h-[283.3px]">
            <img src={Illust} alt="Illustration" className="w-full h-full" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;
