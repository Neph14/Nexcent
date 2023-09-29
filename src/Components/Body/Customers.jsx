import React, { Fragment } from "react";

import Tesla from "../../Assets/Tesla.png";
import Vektor from "../../Assets/Right.png";
import Logo1 from "../../Assets/Vector12121.png";
import Logo2 from "../../Assets/Vector (1).png";
import Logo3 from "../../Assets/Logo12121.png";
import Logo4 from "../../Assets/LogoIpsum.png";
import Logo5 from "../../Assets/Logo (2).png";
import Logo6 from "../../Assets/Logo (3).png";

function Customers() {
  return (
    <Fragment>
      <div className="w-full h-[740px] lg:h-96 bg-[#F5F7FA] flex justify-center overflow-hidden">
        <div className="w-[90%] lg:w-[80%] h-full grid place-items-center place-content-start lg:flex items-center">
          <div className="w-full lg:w-1/3 h-full flex items-center justify-center pt-10 lg:pt-0 lg:mt-4">
            <img
              src={Tesla}
              alt="Tesla"
              className="h-auto lg:h-[90%] w-36 lg:w-[90%]"
            />
          </div>
          <div className="w-11/12 lg:w-2/3 h-5/6 grid gap-0 place-content-stretch">
            <p className="font-inter font-medium text-justify">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="font-inter font-semibold text-lg text-[#4CAF4F]">
              Tim Smith
            </p>
            <p className="font-inter text-[#89939E]">
              British Dragon Boat Racing Association
            </p>
            <div className="grid grid-rows-2 grid-cols-6 lg:flex items-center justify-between px-1 w-full">
              <img src={Logo1} alt="brand" />
              <img src={Logo2} alt="brand" />
              <img src={Logo3} alt="brand" />
              <img src={Logo4} alt="brand" />
              <img src={Logo5} alt="brand" />
              <img src={Logo6} alt="brand" />
              <p className="flex items-center gap-2 font-inter font-semibold text-sm text-[#4CAF4F]">
                Meet all customers{" "}
                <img src={Vektor} alt="Vektor" className="h-fit w-fit" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Customers;
