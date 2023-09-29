import React, { Fragment } from "react";

import Logo1 from "../../Assets/ClientVector (1).png";
import Logo2 from "../../Assets/ClientVector (2).png";
import Logo3 from "../../Assets/ClientLogo (1).png";
import Logo4 from "../../Assets/ClientLogo (2).png";
import Logo5 from "../../Assets/ClientLogo (3).png";
import Logo6 from "../../Assets/ClientLogo (4).png";
import Logo7 from "../../Assets/ClientLogo (5).png";

function Clients() {
  return (
    <Fragment>
      <div className="w-full h-full lg:h-[200px] bg-white flex items-center justify-center overflow-hidden pt-2 lg:pt-5 pb-10 lg:pb-0">
        <div className="w-[80%] h-full">
          <p className="font-inter font-semibold text-3xl text-center text-[#4D4D4D]">
            Our Clients
          </p>
          <p className="font-inter text-sm text-center text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="flex items-center justify-between w-full h-full mt-5 lg:-mt-3">
            <img src={Logo1} alt="Logo1" className="w-[33.41px] h-auto" />
            <img src={Logo2} alt="Logo2" className="w-[33.41px] h-auto" />
            <img src={Logo3} alt="Logo3" className="w-[33.41px] h-auto" />
            <img src={Logo4} alt="Logo4" className="w-[33.41px] h-auto" />
            <img src={Logo5} alt="Logo5" className="w-[33.41px] h-auto" />
            <img src={Logo6} alt="Logo6" className="w-[33.41px] h-auto" />
            <img src={Logo7} alt="Logo7" className="w-[33.41px] h-auto" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Clients;
