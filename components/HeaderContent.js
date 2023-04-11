import React from "react";
import Image from "next/legacy/image";

import mainImage from "../assets/assets/hero-image.jpg";
import company1 from "../assets/assets/company-logo-catalog.png";
import company2 from "../assets/assets/company-logo-circooles.png";
import company3 from "../assets/assets/company-logo-layer.png";
import company4 from "../assets/assets/company-logo-quotient.png";
import company5 from "../assets/assets/company-logo-sisyphus.png";
import { PlayCircle } from "./SvgIcons";
const HeaderContent = () => {
  return (
    <div className="mt-18">
      <div className="text-white text-6xl font-medium leading-2">
        <h1>
          {" "}
          We design physical <u>experiences</u> that <br /> create more happy in
          the world
        </h1>{" "}
      </div>
      <div className="text-secondaryText text-lg mt-3">
        <h3>
          -- We are full-service interior design agency who specialise in <br />
          simple, useful and beautiful solutions for any space.
        </h3>
      </div>

      <div className="lg:flex lg:gap-2 grid gap-2 my-12">
        <button className="bg-whiteButton  rounded-lg py-[10px] px-3 lg:gap-2 justify-center text-center flex text-headerBackground">
          <span>
            {" "}
            <PlayCircle />
          </span>{" "}
          Showreel
        </button>
        <button className="bg-purpleButton rounded-lg py-[10px] px-3 text-white">
          Get in Touch
        </button>
      </div>

      <div style={{ width: "100%" }}>
        <Image
          width={"100%"}
          layout="responsive"
          height={35}
          objectFit="cover"
          src={mainImage}
          alt="about image"
        />
      </div>
      <div className="mt-16">
        <div className="text-center">
          <p className="text-secondaryText text-sm">
            We &apos; ve worked with some great startups
          </p>
        </div>
        <div className="lg:flex grid grid-cols-2 lg:justify-between">
          <div>
            <Image
              src={company3}
              objectFit="contain"
              width={150}
              height={100}
              alt="company1"
            />
          </div>
          <div>
            <Image
              src={company1}
              objectFit="contain"
              width={150}
              height={100}
              alt="company1"
            />
          </div>
          <div>
            <Image
              src={company2}
              objectFit="contain"
              width={150}
              height={100}
              alt="company1"
            />
          </div>
          <div>
            <Image
              src={company4}
              objectFit="contain"
              width={150}
              height={100}
              alt="company1"
            />
          </div>
          <div>
            <Image
              src={company5}
              objectFit="contain"
              width={150}
              height={100}
              alt="company1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
