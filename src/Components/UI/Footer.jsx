import React, { Fragment } from "react";

import Logo from "../../Assets/Logo.png";
import Arrow from "../../Assets/Arrow.png";
import TopFooter from "./TopFooter";
import Ig from "../../Assets/Ig.png";
import Basket from "../../Assets/Basket.png";
import X from "../../Assets/X.png";
import YouTube from "../../Assets/YouTube.png";

function Footer() {
  return (
    <Fragment>
      <TopFooter />
      <div className="bg-[#263238] w-full h-full pt-5 lg:pt-0 lg:h-[230px] grid lg:flex justify-center items-center bottom-0 overflow-hidden">
        <div className="h-5/6 w-11/12 grid gap-8 place-content-center mx-auto lg:mx-0 lg:place-content-baseline lg:flex">
          <div className="h-fit w-full lg:w-2/5 grid place-content-center gap-8 pl-3">
            <div className="w-11/12 h-full mt-2">
              <img src={Logo} alt="Excent" />
            </div>
            <div className="w-full h-full grid place-items-start place-content-start my-auto lg:my-0">
              <p className="text-white">Copyright © 2020 Landify UI Kit.</p>
              <p className="text-white">All rights reserved</p>
            </div>
            <div className="w-11/12 h-full flex items-end justify-between pb-2">
              <img src={Ig} alt="Excent" className="w-auto h-9" />
              <img src={Basket} alt="Excent" className="w-auto h-9" />
              <img src={X} alt="Excent" className="w-auto h-9" />
              <img src={YouTube} alt="Excent" className="w-auto h-9" />
            </div>
          </div>
          <div className="h-full w-full lg:w-3/5">
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 place-content-center place-items-center lg:flex">
              <div className="w-full lg:w-1/4 h-full text-white grid pl-2 gap-5 lg:gap-0 lg:ml-0">
                <p className="font-inter font-semibold text-xl">Company</p>
                <div className="grid grid-cols-1 grid-rows-5 gap-1">
                  <p className="font-inter font-normal text-sm">About us</p>
                  <p className="font-inter font-normal text-sm">Blog</p>
                  <p className="font-inter font-normal text-sm">Contact us</p>
                  <p className="font-inter font-normal text-sm">Pricing</p>
                  <p className="font-inter font-normal text-sm">Testimonials</p>
                </div>
              </div>
              <div className="w-full lg:w-1/4 h-full text-white grid pl-2 gap-5 lg:gap-0 ml-8 lg:ml-0">
                <p className="font-inter font-semibold text-xl">Support</p>
                <div className="grid grid-cols-1 grid-rows-5 gap-1">
                  <p className="font-inter font-normal text-sm">Help center</p>
                  <p className="font-inter font-normal text-sm">
                    Terms of service
                  </p>
                  <p className="font-inter font-normal text-sm">Legal</p>
                  <p className="font-inter font-normal text-sm">
                    Privacy policy
                  </p>
                  <p className="font-inter font-normal text-sm">Status</p>
                </div>
              </div>
              <div className="w-[300px] col-span-2 lg:w-1/3 h-2/3 text-white grid mt-8 lg:mt-0 mx-auto lg:ml-0">
                <p className="font-inter font-semibold text-xl">
                  Stay up to date
                </p>
                <div className="flex bg-[#717171] w-fit h-min items-center rounded-md">
                  <input
                    type="field"
                    className="pl-2 py-2 bg-[#717171] w-fit rounded-md text-[#D9DBE1] font-inter font-normal text-sm"
                    placeholder="Your email address"
                  />
                  <img src={Arrow} alt="Send" className="w-5 h-auto pr-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
