import React, { Fragment } from "react";

import Frame from "../../Assets/Frame 35.png";

function Unlock() {
  return (
    <Fragment>
      <div className=" w-full h-auto lg:h-[416.95px] flex justify-center items-center overflow-hidden py-5 lg:py-0">
        <div className="w-full lg:w-[90%] h-auto lg:h-full grid place-items-center lg:flex items-center justify-between lg:px-20">
          <div className="lg:w-auto lg:h-5/6">
            <img src={Frame} alt="Pana" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-[500px] h-full gap-3 grid place-content-center place-items-center lg:place-items-baseline">
            <p className="font-inter font-semibold text-2xl lg:text-3xl text-[#4D4D4D] w-5/6 lg:w-full">
              How to design your site footer like we did
            </p>
            <p className="font-inter text-sm text-[#717171] text-justify w-5/6 lg:w-full">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="rounded-sm bg-[#4CAF4F] text-white flex justify-center items-center w-[89.55px] h-[36.49px] mt-3">
              <p className="font-inter font-medium text-xs w-[220px] h-[40px] flex items-center justify-center">
                Learn More
              </p>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Unlock;
