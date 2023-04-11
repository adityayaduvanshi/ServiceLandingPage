import React from "react";
import Image from "next/image";
import logo from "../assets/assets/logo.png";
const MobileMenu = ({ onCancel }) => {
  return (
    <div
      style={{
        transition:
          "all 1s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s",
      }}
      className="h-[100vh] overflow-hidden w-full fixed top-0 left-0 z-40  bg-headerBackground text-whitishGrey"
    >
      <div className="flex mx-2 mt-2 justify-between">
        <div className="flex items-center gap-2">
          <Image width={38} height={40} src={logo} alt="logo" />
          <p className="text-white text-lg">Hourglass</p>
        </div>
        <div>
          <button onClick={onCancel}>
            <svg
              height="25px"
              viewBox="0 0 512 512"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid mt-20 gap-7 text-center text-4xl">
        <h2>Home</h2>
        <h2>Products</h2>
        <h2>Resouces</h2>
        <h2>Support</h2>
        <h2>Talk to sales</h2>
      </div>
    </div>
  );
};

export default MobileMenu;
