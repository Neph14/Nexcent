import React, { Fragment } from "react";

import AchvIcon from "../../Assets/AchvIcon.png";
import AchvIcon1 from "../../Assets/AchvIcon (1).png";
import AchvIcon2 from "../../Assets/AchvIcon (2).png";
import AchvIcon3 from "../../Assets/AchvIcon (3).png";

function Achievement() {
  return (
    <Fragment>
      <div className="bg-[#F5F7FA] w-full h-full lg:h-[202.94px] flex items-center justify-center overflow-hidden py-5 lg:py-0">
        <div className="w-5/6 h-full grid lg:flex justify-center items-center gap-5">
          <div className="w-full lg:w-1/2 h-full grid place-content-center">
            <p className="font-inter font-semibold text-2xl text-[#4D4D4D] w-[280px] h-auto mx-auto text-center lg:text-start">
              Helping a local
              <span className="text-[#4CAF4F]"> business reinvent itself</span>
            </p>
            <p className="font-inter text-xs text-[#18191F] w-full h-auto">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-full grid grid-rows-2 grid-cols-2 gap-4 lg:gap-0">
            <div className="flex items-center">
              <img
                src={AchvIcon}
                alt="AchvIcon"
                className="w-auto h-[33.41px]"
              />
              <div className="ml-2">
                <p className="font-inter font-bold text-xl text-[#4D4D4D]">
                  2,245,341
                </p>
                <p className="font-inter text-xs text-[#717171]">Members</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={AchvIcon1}
                alt="AchvIcon"
                className="w-auto h-[33.41px]"
              />
              <div className="ml-2">
                <p className="font-inter font-bold text-xl text-[#4D4D4D]">
                  46,328
                </p>
                <p className="font-inter text-xs text-[#717171]">Clubs</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={AchvIcon3}
                alt="AchvIcon"
                className="w-auto h-[33.41px]"
              />
              <div className="ml-2">
                <p className="font-inter font-bold text-xl text-[#4D4D4D]">
                  828,867
                </p>
                <p className="font-inter text-xs text-[#717171]">
                  Event Bookings
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={AchvIcon2}
                alt="AchvIcon"
                className="w-auto h-[33.41px]"
              />
              <div className="ml-2">
                <p className="font-inter font-bold text-xl text-[#4D4D4D]">
                  1,926,436
                </p>
                <p className="font-inter text-xs text-[#717171]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Achievement;
