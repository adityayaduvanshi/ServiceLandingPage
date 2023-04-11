import React from "react";
// import Image from "next/legacy/image";
import Image from "next/image";
import aboutImage from "../assets/assets/about-image.png";
import { MessageChatIcon, ZapIcon } from "./SvgIcons";
const FeatureSection = () => {
  return (
    <div>
      <div className="lg:px-16 px-4 pb-36 pt-12 bg-whiteButton py-4">
        <div className="lg:flex grid">
          <div className="lg:w-[50%]">
            <div>
              <h4 className="text-purpleButton text-sm font-semibold">
                Who we are
              </h4>
            </div>
            <div>
              <h2 className="text-textPrimary font-semibold text-3xl mt-4 mb-5">
                Commercial interior designers
              </h2>

              <p className="text-tertiaryText mt-2 text-lg">
                Untitled are a commercial interior design studio. We specialise
                in customised office design, restaurant design, shop design, and
                studio design.{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-4 lg:grid lg:gap-4 ">
            <div>
              <h4 className="font-semibold">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginRight: 20,
                  }}
                  className="rounded-full bg-whitishGrey p-3"
                >
                  <MessageChatIcon />
                </span>
                Share team inboxes
              </h4>
              <p className="text-tertiaryText lg:mt-2 mx-16">
                Whether you have a team of 2 or 200, our shared team inboxes{" "}
                <br /> keep everyone on the same page and in the loop.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mt-2">
                {" "}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginRight: 20,
                  }}
                  className="rounded-full bg-whitishGrey p-3"
                >
                  <ZapIcon />
                </span>
                Deliver instant answers
              </h4>
              <p className="text-tertiaryText lg:mt-2 mx-16">
                An all-in-one customer service platform that helps you balance{" "}
                <br /> everything your customers need to be happy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        // style={{ height: "500px" }}
        className="px-16 relative block bg-white w-full lg:h-[500px] h-[100px] md:[500px] "
      >
        <Image
          src={aboutImage}
          alt="about image"
          // width={"100%"}
          // height={"100%"}
          // objectFit="cover"
          className="md:h-100 md:w-100 left-0 lg:px-16 sm:px-4 md:px-4 top-[-90px] lg:w-[100%]  lg:h-[500px]"
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />
      </div>
      <hr className="my-12 mx-16 h-0.5 border-t-0 bg-secondaryText opacity-100" />
    </div>
  );
};

export default FeatureSection;
