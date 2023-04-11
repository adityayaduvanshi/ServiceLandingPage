import React from "react";
import logo from "../assets/assets/logo.png";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <div className="lg:flex md:flex  mb-28 justify-between pt-2">
        {isDesktop ? (
          <>
            <div className="flex flex-row gap-6 justify-around items-center ">
              <div className="flex items-center gap-2">
                <Image width={38} height={40} src={logo} alt="logo" />
                <p className="text-white text-lg">Hourglass</p>
              </div>
              <div>
                <Link href="#">
                  <p className="text-white text-sm">Home </p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="text-white text-sm">
                    Products <span> </span>
                  </p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="text-white text-sm">Resources</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-4">
              <div>
                <Link href="#">
                  <p className="text-white">Support</p>
                </Link>
              </div>
              <div>
                <button className="text-white rounded-lg py-[10px] px-3  bg-purpleButton">
                  Talk to Sales
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image width={38} height={40} src={logo} alt="logo" />
              <p className="text-white text-lg">Hourglass</p>
            </div>
            <div>
              <svg fill="#ffffff" viewBox="0 0 448 512" width="30" title="bars">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
