import React, { Fragment } from "react";

import Vektor from "../../Assets/Vector.png";

function TopFooter() {
  return (
    <Fragment>
      <div className="w-full h-full lg:h-60 bg-[#F5F7FA] grid place-content-center place-items-center gap-5 overflow-hidden py-10 lg:py-0">
        <p className="font-inter font-semibold text-xl lg:text-5xl text-center text-[#263238] w-[617.41px]">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <button className="rounded-sm bg-[#4CAF4F] text-white flex justify-center items-center gap-2 md w-[140px] h-[40px]">
          <p className="font-inter font-medium text-xs w-max h-auto">
            Register Now
          </p>
          <img src={Vektor} alt="Vektor" className="w-auto h-auto" />
        </button>
      </div>
    </Fragment>
  );
}

export default TopFooter;
