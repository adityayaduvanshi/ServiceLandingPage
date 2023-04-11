import React from "react";
import Image from "next/legacy/image";
import logo from "../assets/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-white lg:mx-16 mx-4">
      <div className=" lg:gap-80 md:gap-8 lg:flex  grid mb-14">
        <div className="grid w-[50%]">
          <div className="flex items-center gap-10">
            <Image src={logo} width={55} height={55} alt="logo" />
            <h3 className="text-purpleButton text-2xl font-semibold">
              Hourglass
            </h3>
          </div>
          <div className="lg:flex justify-between mt-5 grid lg:gap-x-2 gap-x-20 mb-5 grid-cols-2">
            <p className="text-tertiaryText text-lg cursor-pointer">Overview</p>
            <p className="text-tertiaryText text-lg cursor-pointer">
              Features{" "}
            </p>
            <p className="text-tertiaryText text-lg cursor-pointer">Pricing</p>
            <p className="text-tertiaryText text-lg cursor-pointer">Careers</p>
            <p className="text-tertiaryText text-lg cursor-pointer">Help</p>
            <p className="text-tertiaryText text-lg cursor-pointer">Policy</p>
          </div>
        </div>
        <div className="grid  w-[50%]">
          <div className=" w-full  ">
            <p className="font-semibold lg:mx-10 mb-3"> Stay up to date</p>
          </div>
          <div className="flex gap-2 lg:mx-10">
            <input
              placeholder="Enter your email"
              className="rounded-md"
              style={{
                outline: "2px solid #D0D5DD",
                padding: "2px 8px 2px 8px",
                height: 50,
              }}
              type="text"
              name="email"
            />
            <button className="text-white rounded-lg py-[10px] px-8 h-12  bg-purpleButton">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 text-tertiaryText">
        <hr class="my-12  h-0.5 border-t-0 bg-secondaryText opacity-70" />
        <div className="lg:flex md:flex justify-between grid">
          <p className="order-2">© 2077 Fake Company. All rights reserved.</p>
          <div className="flex order-1 gap-4">
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">Privacy</p>
            <p className="cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
