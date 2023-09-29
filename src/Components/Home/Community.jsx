import React, { Fragment } from "react";

import CommIcon from "../../Assets/CommIcon.png";
import CommIcon2 from "../../Assets/CommIcon (1).png";
import CommIcon3 from "../../Assets/CommIcon (2).png";

function Community() {
  return (
    <Fragment>
      <div className="w-full h-fit lg:h-full py-4 overflow-hidden mt-10">
        <div className="w-full h-[84.57px] grid place-content-center place-items-center pt-10 pb-16">
          <p className="font-inter font-semibold text-2xl text-center w-[360px] h-fit">
            Manage your entire community in a single system
          </p>
          <p className="font-inter text-xs text-center w-[360px] h-fit mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="w-11/12 h-[450px] lg:h-[196.1px] grid grid-cols-1 grid-rows-3 place-items-center place-content-center mx-auto lg:flex mt-5 lg:mt-0 gap-5 lg:gap-1">
          <div className="w-5/6 lg:w-1/3 h-full grid place-content-center place-items-center gap-1 shadow-lg">
            <img
              src={CommIcon2}
              alt="Membership Organisations"
              className="w-[45.24px] h-auto mb-2"
            />
            <p className="font-inter font-bold text-xl w-full lg:w-[185px] text-center text-[#4D4D4D]">
              Membership Organisations
            </p>
            <p className="font-inter text-xs w-11/12 lg:w-[200px] text-center text-[#4D4D4D]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-5/6 lg:w-1/3 h-full grid place-content-center place-items-center gap-1 shadow-lg">
            <img
              src={CommIcon2}
              alt="Membership Organisations"
              className="w-[45.24px] h-auto mb-2"
            />
            <p className="font-inter font-bold text-xl w-full lg:w-[185px] text-center text-[#4D4D4D]">
              Membership Organisations
            </p>
            <p className="font-inter text-xs w-11/12 lg:w-[200px] text-center text-[#4D4D4D]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-5/6 lg:w-1/3 h-full grid place-content-center place-items-center gap-1 shadow-lg">
            <img
              src={CommIcon2}
              alt="Membership Organisations"
              className="w-[45.24px] h-auto mb-2"
            />
            <p className="font-inter font-bold text-xl w-full lg:w-[185px] text-center text-[#4D4D4D]">
              Membership Organisations
            </p>
            <p className="font-inter text-xs w-11/12 lg:w-[200px] text-center text-[#4D4D4D]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Community;
